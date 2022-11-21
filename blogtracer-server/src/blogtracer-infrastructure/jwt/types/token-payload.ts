import Roles from "@common/enums/roles";

type TokenPayload = {
    id?: string,
    username?: string, 
    ipAddress: string,
    role: Roles
}

export default TokenPayload;