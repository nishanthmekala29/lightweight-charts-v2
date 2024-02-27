import { IAxisRenderer } from '../../renderers/iaxis-view-renderer';
import {Pane} from "../../model/pane";

export interface IAxisView {
	renderer(pane: Pane): IAxisRenderer | null;
}
