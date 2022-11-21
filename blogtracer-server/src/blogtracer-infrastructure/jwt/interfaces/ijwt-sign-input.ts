import Roles from "@common/enums/roles";

interface IJWTSignInput {
    id?: string,
    username?: string,
    email?: string,
    ipAddress: string,
    role: Roles
}

export default IJWTSignInput;
