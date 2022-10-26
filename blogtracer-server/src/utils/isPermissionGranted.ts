import { appConfig } from "@base/app/config/app-config";
import Roles from "@base/shared/roles";

const hasRole = (role: Roles, authList: Roles[]) => authList.find((_auth) => _auth === role);

const isPermissionGranted = (role: Roles, path: string): boolean => {
    let isGranted = false;
    
    Object.values(appConfig.routes).forEach(
        (r) => Object.values(r).find(
            (p) => {
                if (p.path === path && hasRole(role, p.auth))
                    isGranted = true;
            }
        )
    );

    return isGranted;
}

export default isPermissionGranted;