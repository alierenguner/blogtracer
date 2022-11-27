/** Description: Returns the token without 'Bearer' key. */
const getToken = (tokenWithBearer: string) => {
    try {
        return tokenWithBearer.toString().split(' ')[1];
        
    } catch (error) {
        return null;
    }
}

export default getToken;