import IMemoryCacheItem from "./imemory-cache-item";

class MemoryCacheItem implements IMemoryCacheItem{
    private _cache = new Map();

    public set(key: string, value: any) {
        this._cache.set(key, value);
    }

    public get(key: string) {
        this._cache.get(key);
    }

    public delete(key: string) {
        this._cache.delete(key);
    }

    public clear() {
        this._cache.clear();
    }
}

export default MemoryCacheItem;