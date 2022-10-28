/** Description: Type of state getters. */
export type StoreManagerGetters<T> = {
    [ K  in keyof T as `get${Capitalize<string & K>}` ]: () => T[K] 
}

/** Description: Type of state setters. */
export type StoreManagerSetters<T> = {
    [ K  in keyof T as `set${Capitalize<string & K>}` ]: (payload: T[K]) => void 
}