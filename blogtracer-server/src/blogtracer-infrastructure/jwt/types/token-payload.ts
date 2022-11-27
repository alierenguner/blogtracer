import Roles from "@core-shared/enums/roles";

type TokenPayload = {
    id?: string,
    username?: string, 
    ipAddress: string,
    role: Roles
}

export default TokenPayload;