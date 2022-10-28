import { Store } from "redux";
import storeContext from "./context";
import StoreManagerHelper from "./helpers/store-manager-helper";
// Slices
import appSlice from "./slices/app-slice";

export class StoreManager {
    public app;

    constructor() {
        const helper = new StoreManagerHelper(storeContext);

        this.app = helper.createFunctions(appSlice);
    }
}

const storeManager = new StoreManager();
export default storeManager;