import { DataTypes, ModelAttributeColumnOptions } from "sequelize"

type EntityModel<E> = {
    name: string,
    attributes: {
        [K in keyof E]: DataTypes.DataType | ModelAttributeColumnOptions<any> 
    }
}

export default EntityModel;