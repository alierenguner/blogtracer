import { Slice, Store } from "@reduxjs/toolkit";
import { StoreManagerGetters, StoreManagerSetters } from "./types";
import _ from "lodash";

class StoreManagerHelper {
    private readonly _store;
    
    constructor(store: Store) {
        this._store =  store;
    }
    
    /** Description: Creates the state getters of reducer. */
    private createGetters = <T> (slice: Slice<T>) => {
        const getters: StoreManagerGetters<T> = {} as any;
        const initialState: T = slice.getInitialState();

        Object.keys(initialState as []).forEach((stateKey: string) => {
            const getterKey = _.camelCase('get' + stateKey);

            (getters as any)[getterKey] = () => this._store.getState()[slice.name][stateKey];
        })
        
        return getters;
    }

    /** Description: Creates the state setters of reducer. */
    private createSetters = <T> (slice: Slice<T>) => {
        const setters: StoreManagerSetters<T> = {} as any;
        const initialState: T = slice.getInitialState();

        Object.keys(initialState as []).forEach((stateKey) => {
            const setterKey = _.camelCase('set' + stateKey);
            const action = (payload: any) => (slice.actions as any)[setterKey](payload);

            if (slice.actions.hasOwnProperty(setterKey)) {
                (setters as any)[setterKey] = (payload: any) => this._store.dispatch(action(payload));

            } else {
                throw new Error(`Error! Didn't find the ${stateKey} action in the ${slice.name} slice.`)
            }
        })

        return setters;
    }

    /** Description: Creates the state setters and getters of reducer. */
    public createFunctions = <T> (slice: Slice<T>) => {
        const getters = this.createGetters(slice);
        const setters = this.createSetters(slice);

        return {
            ...getters,
            ...setters
        } as StoreManagerGetters<T> & StoreManagerSetters<T>;
    }
}

export default StoreManagerHelper;