import IBaseEntity from "@core-shared/interfaces/entities/ibase-entity";

abstract class BaseEntity implements IBaseEntity {
    public id: string;
}

export default BaseEntity;