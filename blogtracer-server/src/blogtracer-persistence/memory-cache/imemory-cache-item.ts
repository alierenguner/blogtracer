interface ICache {
    set: (key: string, value: any) => void,
    get: (key: string) => void,
    delete: (key: string) => void,
    clear: () => void
}

export default ICache;