import IUserSave from "@core-shared/interfaces/entities/iuser-save";
import BaseEntity from "@domain/seedwork/base-entity";

class UserSave extends BaseEntity implements IUserSave {
    public post_id: number;
    public user_id: number;
    public create_date: Date
    public update_date: Date | null;
    public active: boolean;
}

export default UserSave;