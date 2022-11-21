import IRole from "@core-shared/interfaces/entities/irole";
import BaseEntity from "@domain/seedwork/base-entity";

class Role extends BaseEntity implements IRole {
    public name: string;
}

export default Role;