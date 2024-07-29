import {BitmapCoordinatesRenderingScope} from 'fancy-canvas';

import {Coordinate} from '../model/coordinate';
import {SeriesItemsIndexesRange} from '../model/time-data';

import {LinePoint, LineType} from './draw-line';
import {MarkerType} from "../model/series-options";

// eslint-disable-next-line max-params
export function walkLine<TItem extends LinePoint, TStyle extends CanvasRenderingContext2D['fillStyle'] | CanvasRenderingContext2D['strokeStyle']>(
	renderingScope: BitmapCoordinatesRenderingScope,
	items: readonly TItem[],
	lineType: LineType,
	visibleRange: SeriesItemsIndexesRange,
	barWidth: number,
	withBreaks: boolean,
	markerType: MarkerType,
	// the values returned by styleGetter are compared using the operator !==,
	// so if styleGetter returns objects, then styleGetter should return the same object for equal styles
	styleGetter: (renderingScope: BitmapCoordinatesRenderingScope, item: TItem) => TStyle,
	finishStyledArea: (renderingScope: BitmapCoordinatesRenderingScope, style: TStyle, areaFirstItem: LinePoint, newAreaFirstItem: LinePoint) => void
): void {
	if (items.length === 0 || visibleRange.from >= items.length || visibleRange.to <= 0) {
		return;
	}
	if (withBreaks) {
		const groups = breakIntoGroups(items, visibleRange);
		for (let i = 0; i < groups.length; i++) {
			walkLineImpl(renderingScope, items, lineType, groups[i], barWidth, withBreaks, markerType, styleGetter, finishStyledArea);
		}
		return;
	}
	walkLineImpl(renderingScope, items, lineType, visibleRange, barWidth, withBreaks, markerType, styleGetter, finishStyledArea);
}

// eslint-disable-next-line max-params, complexity
function walkLineImpl<TItem extends LinePoint, TStyle extends CanvasRenderingContext2D['fillStyle'] | CanvasRenderingContext2D['strokeStyle']>(
	renderingScope: BitmapCoordinatesRenderingScope,
	items: readonly TItem[],
	lineType: LineType,
	visibleRange: SeriesItemsIndexesRange,
	barWidth: number,
	withBreaks: boolean,
	markerType: MarkerType,
	// the values returned by styleGetter are compared using the operator !==,
	// so if styleGetter returns objects, then styleGetter should return the same object for equal styles
	styleGetter: (renderingScope: BitmapCoordinatesRenderingScope, item: TItem) => TStyle,
	finishStyledArea: (renderingScope: BitmapCoordinatesRenderingScope, style: TStyle, areaFirstItem: LinePoint, newAreaFirstItem: LinePoint) => void
): void {
	const { context: ctx, horizontalPixelRatio, verticalPixelRatio } = renderingScope;

	const firstItem = items[visibleRange.from];
	let currentStyle = styleGetter(renderingScope, firstItem);
	let currentStyleFirstItem = firstItem;
	const changeStyle = (newStyle: TStyle, currentItem: TItem) => {
		finishStyledArea(renderingScope, currentStyle, currentStyleFirstItem, currentItem);

		ctx.beginPath();
		currentStyle = newStyle;
		currentStyleFirstItem = currentItem;
	};

	if ([LineType.Circle, LineType.Cross].includes(lineType)) {
		ctx.beginPath();
		for (let i = visibleRange.from; i < visibleRange.to; ++i) {
			const currentItem = items[i];
			const itemStyle = styleGetter(renderingScope, currentItem);
			if (lineType !== LineType.WithSteps && itemStyle !== currentStyle) {
				changeStyle(itemStyle, currentItem);
			}
			ctx.moveTo(currentItem.x * horizontalPixelRatio, currentItem.y * verticalPixelRatio);
			switch (lineType) {
				case LineType.Circle:
					ctx.fillStyle = currentStyle;
					ctx.arc(currentItem.x * horizontalPixelRatio, currentItem.y * verticalPixelRatio, ctx.lineWidth / 2, 0, 2 * Math.PI);
					ctx.fill();
					break;
				case LineType.Cross: {
					// Define the center point (a, b)
					const a = currentItem.x * horizontalPixelRatio;
					const b = currentItem.y * verticalPixelRatio;

					// Define the threshold x
					const x = ctx.lineWidth;

					// Calculate the half width/height of the plus
					const halfBoxSize = (3 * x) / 2;

					// Draw the horizontal line
					ctx.beginPath();
					ctx.moveTo(a - halfBoxSize, b); // Start point
					ctx.lineTo(a + halfBoxSize, b); // End point
					ctx.strokeStyle = currentStyle;
					ctx.stroke();

					// Draw the vertical line
					ctx.beginPath();
					ctx.moveTo(a, b - halfBoxSize); // Start point
					ctx.lineTo(a, b + halfBoxSize); // End point
					ctx.strokeStyle = currentStyle;
					ctx.stroke();
					break;
				}
			}
		}
	} else if (visibleRange.to - visibleRange.from < 2) {
		const halfBarWidth = barWidth / 2;

		ctx.beginPath();

		const item1: LinePoint = { x: firstItem.x - halfBarWidth as Coordinate, y: firstItem.y };
		const item2: LinePoint = { x: firstItem.x + halfBarWidth as Coordinate, y: firstItem.y };

		ctx.moveTo(item1.x * horizontalPixelRatio, item1.y * verticalPixelRatio);
		ctx.lineTo(item2.x * horizontalPixelRatio, item2.y * verticalPixelRatio);

		finishStyledArea(renderingScope, currentStyle, item1, item2);
	} else {
		let currentItem = currentStyleFirstItem;
		const halfBarWidth = barWidth / 2;

		ctx.beginPath();
		if ([LineType.WithSteps].includes(lineType)) {
			ctx.moveTo((firstItem.x - halfBarWidth) * horizontalPixelRatio, firstItem.y * verticalPixelRatio);
		} else {
			ctx.moveTo(firstItem.x * horizontalPixelRatio, firstItem.y * verticalPixelRatio);
		}

		for (let i = visibleRange.from + 1; i < visibleRange.to; ++i) {
			currentItem = items[i];
			const itemStyle = styleGetter(renderingScope, currentItem);

			switch (lineType) {
				case LineType.Simple:
					ctx.lineTo(currentItem.x * horizontalPixelRatio, currentItem.y * verticalPixelRatio);
					break;
				case LineType.WithSteps:
					ctx.lineTo((currentItem.x - halfBarWidth) * horizontalPixelRatio, items[i - 1].y * verticalPixelRatio);

					if (itemStyle !== currentStyle) {
						changeStyle(itemStyle, currentItem);
						ctx.lineTo((currentItem.x - halfBarWidth) * horizontalPixelRatio, items[i - 1].y * verticalPixelRatio);
					}

					ctx.lineTo((currentItem.x - halfBarWidth) * horizontalPixelRatio, currentItem.y * verticalPixelRatio);
					if (i === visibleRange.to - 1) {
						ctx.lineTo(currentItem.x * horizontalPixelRatio, currentItem.y * verticalPixelRatio);
					}
					break;
				case LineType.Curved: {
					const [cp1, cp2] = getControlPoints(items, i - 1, i);
					ctx.bezierCurveTo(
						cp1.x * horizontalPixelRatio,
						cp1.y * verticalPixelRatio,
						cp2.x * horizontalPixelRatio,
						cp2.y * verticalPixelRatio,
						currentItem.x * horizontalPixelRatio,
						currentItem.y * verticalPixelRatio
					);
					break;
				}
			}

			if (lineType !== LineType.WithSteps && itemStyle !== currentStyle) {
				changeStyle(itemStyle, currentItem);
				ctx.moveTo(currentItem.x * horizontalPixelRatio, currentItem.y * verticalPixelRatio);
			}
		}

		if (currentStyleFirstItem !== currentItem || currentStyleFirstItem === currentItem && lineType === LineType.WithSteps) {
			finishStyledArea(renderingScope, currentStyle, currentStyleFirstItem, currentItem);
		}
	}

	if (markerType !== MarkerType.None) {
		currentStyle = styleGetter(renderingScope, firstItem);
		const halfBarWidth = barWidth / 2;
		for (let i = visibleRange.from; i < visibleRange.to; ++i) {
			const currentItem = items[i];
			const itemStyle = styleGetter(renderingScope, currentItem);
			if (itemStyle !== currentStyle) {
				changeStyle(itemStyle, currentItem);
			}
			drawMarker(renderingScope, currentStyle, markerType, { x: (lineType === LineType.WithSteps) ? (items[i].x - halfBarWidth) as Coordinate : items[i].x, y: items[i].y }, ctx.lineWidth * 3);
		}
	}
}

const curveTension = 6;

function subtract(p1: LinePoint, p2: LinePoint): LinePoint {
	return { x: p1.x - p2.x as Coordinate, y: p1.y - p2.y as Coordinate };
}

function add(p1: LinePoint, p2: LinePoint): LinePoint {
	return { x: p1.x + p2.x as Coordinate, y: p1.y + p2.y as Coordinate };
}

function divide(p1: LinePoint, n: number): LinePoint {
	return { x: p1.x / n as Coordinate, y: p1.y / n as Coordinate };
}

/**
 * @returns Two control points that can be used as arguments to {@link CanvasRenderingContext2D.bezierCurveTo} to draw a curved line between `points[fromPointIndex]` and `points[toPointIndex]`.
 */
export function getControlPoints(points: readonly LinePoint[], fromPointIndex: number, toPointIndex: number): [LinePoint, LinePoint] {
	const beforeFromPointIndex = Math.max(0, fromPointIndex - 1);
	const afterToPointIndex = Math.min(points.length - 1, toPointIndex + 1);
	const cp1 = add(points[fromPointIndex], divide(subtract(points[toPointIndex], points[beforeFromPointIndex]), curveTension));
	const cp2 = subtract(points[toPointIndex], divide(subtract(points[afterToPointIndex], points[fromPointIndex]), curveTension));

	return [cp1, cp2];
}

function drawMarker<TStyle extends CanvasRenderingContext2D['fillStyle'] | CanvasRenderingContext2D['strokeStyle']>(renderingScope: BitmapCoordinatesRenderingScope, style: TStyle, markerType: MarkerType, point: {x: Coordinate, y: Coordinate}, size: number): void {
	switch (markerType) {
		case MarkerType.None: return;
		case MarkerType.Diamond: {
			drawDiamond(renderingScope, style, point, size);
			break;
		}
	}
}

function drawDiamond<TStyle extends CanvasRenderingContext2D['fillStyle'] | CanvasRenderingContext2D['strokeStyle']>(renderingScope: BitmapCoordinatesRenderingScope, style: TStyle, point: {x: Coordinate; y: Coordinate}, size: number): void {
	const { context: ctx, horizontalPixelRatio, verticalPixelRatio } = renderingScope;

	const a = point.x * horizontalPixelRatio;
	const b = point.y * verticalPixelRatio;
	ctx.beginPath(); // Start a new path
	ctx.moveTo(a, b - size); // Move to the top point
	ctx.lineTo(a + size, b); // Draw line to the right point
	ctx.lineTo(a, b + size); // Draw line to the bottom point
	ctx.lineTo(a - size, b); // Draw line to the left point
	ctx.closePath(); // Close the path
	ctx.fillStyle = style;
	ctx.fill();
}

function breakIntoGroups<TItem extends LinePoint>(items: readonly TItem[], visibleRange: SeriesItemsIndexesRange): SeriesItemsIndexesRange[] {
	const ranges: SeriesItemsIndexesRange[] = [];
	let lastRange: SeriesItemsIndexesRange | undefined;
	for (let i = visibleRange.from; i < visibleRange.to; i++) {
		if (isLinePointValid(items[i])) {
			if (!lastRange) {
				lastRange = { from: i, to: i + 1 };
			} else {
				lastRange.to = i + 1;
			}
		} else {
			if (lastRange) {
				ranges.push(lastRange);
			}
			lastRange = undefined;
		}
	}
	if (lastRange) {
		ranges.push(lastRange);
	}
	return ranges;
}

function isLinePointValid(point: LinePoint): boolean {
	return point.y && !Number.isNaN(point.y as number);
}
