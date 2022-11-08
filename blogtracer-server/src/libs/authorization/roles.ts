import { default as AppRoles } from '@base/shared/roles';

/** Description: Contains app roles. */
namespace Roles {
    export const NONE = AppRoles.NONE;
    export const GUEST = AppRoles.GUEST;
    export const USER = AppRoles.USER;
    export const CONTENT_CREATOR = AppRoles.CONTENT_CREATOR;
    export const MODERATOR = AppRoles.MODERATOR;
    export const ADMIN = AppRoles.ADMIN;
}

export default Roles;
// TODO: should be reorganized. (-duplicated roles)