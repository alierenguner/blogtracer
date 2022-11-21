import MemoryCacheItem from "./memory-cache-item";

class MemoryCache {
    public readonly blacklist;
    
    constructor() {
        this.blacklist = new MemoryCacheItem();
    }
}

const memoryCache = new MemoryCache();
export default memoryCache;