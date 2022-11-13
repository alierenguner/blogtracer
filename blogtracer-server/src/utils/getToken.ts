const getToken = (tokenWithBearer: string) => {
    try {
        return Promise.resolve(tokenWithBearer.toString().split(' ')[1]);
        
    } catch (error) {
        return Promise.reject(error);
    }
}

export default getToken;