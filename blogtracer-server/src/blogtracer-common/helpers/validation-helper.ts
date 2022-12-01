import Exception from "@common/types/exception";
import Validation from "@common/types/validation";

class ValidationHelper {
    public isEmpty = (value: string, callback?: Function) => {
        if (value.trim().length === 0) {
            callback!();
            return true;
        } 

        return false;
    }
}

const validationHelper = new ValidationHelper();
export default validationHelper;