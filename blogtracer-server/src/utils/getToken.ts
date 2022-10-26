const getToken = (tokenWithBearer: string   ) => {
    return tokenWithBearer.toString().split(' ')[1];
}

export default getToken;