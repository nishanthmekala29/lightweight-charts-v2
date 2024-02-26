import { IPaneRenderer } from '../../renderers/ipane-renderer';
import {Pane} from "../../model/pane";

export interface IPaneView {
	renderer(pane: Pane, addAnchors?: boolean): IPaneRenderer | null;
}
