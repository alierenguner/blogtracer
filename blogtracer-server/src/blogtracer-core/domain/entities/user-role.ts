import IUserRole from "@core-shared/interfaces/entities/iuser-role";
import BaseEntity from "@domain/seedwork/base-entity";

class UserRole extends BaseEntity implements IUserRole {
    public user_id: string;
    public role_id: string;
}

export default UserRole;