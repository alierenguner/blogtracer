import Permissions from "./permissions";
import Roles from "./roles";

class Authorization {
    public organization = new Map();

    constructor() {
        this.organizeRoles();
    }

    private organizeRoles = () => {
        // Non role permissions
        const nonPermissions: string[] = [
            Permissions.AUTH_TOKEN
        ];
         
        // Guest role permissions
        const guestPermissions: string[] = [
            Permissions.AUTH_LOGIN,
            Permissions.AUTH_REGISTER
        ];

        // User role permissions
        const userPermissions: string[] = [
            Permissions.USER_UPDATE + Permissions.SCOPES.PRIVATE,
            Permissions.USER_DELETE + Permissions.SCOPES.PRIVATE,
            Permissions.USER_FIND_ALL,
            Permissions.USER_FIND_ONE,
            Permissions.USER_POSTS,
            Permissions.USER_POST_LIKES,
            Permissions.USER_POST_SAVES + Permissions.SCOPES.PRIVATE,
            Permissions.USER_POST_COMMENTS + Permissions.SCOPES.PRIVATE,
            Permissions.USER_POST_COMMENT_LIKES + Permissions.SCOPES.PRIVATE,
            Permissions.USER_POST_VIEWS + Permissions.SCOPES.PRIVATE,
            Permissions.POST_FIND_ALL,
            Permissions.POST_FIND_ONE,
            Permissions.POST_LIKE_CREATE,
            Permissions.POST_LIKE_DELETE,
            Permissions.POST_LIKE_FIND_ALL,
            Permissions.POST_SAVE_CREATE,
            Permissions.POST_SAVE_DELETE,
            Permissions.POST_SAVE_FIND_ALL,
            Permissions.POST_COMMENT_CREATE,
            Permissions.POST_COMMENT_UPDATE + Permissions.SCOPES.PRIVATE,
            Permissions.POST_COMMENT_DELETE + Permissions.SCOPES.PRIVATE,
            Permissions.POST_COMMENT_FIND_ALL
        ];

        // Content creator role permissions
        const contentCreatorPermissions: string[] = [
            Permissions.USER_UPDATE + Permissions.SCOPES.PRIVATE,
            Permissions.USER_DELETE + Permissions.SCOPES.PRIVATE,
            Permissions.USER_FIND_ALL,
            Permissions.USER_FIND_ONE,
            Permissions.USER_POSTS,
            Permissions.USER_POST_LIKES,
            Permissions.USER_POST_SAVES + Permissions.SCOPES.PRIVATE,
            Permissions.USER_POST_COMMENTS + Permissions.SCOPES.PRIVATE,
            Permissions.USER_POST_COMMENT_LIKES + Permissions.SCOPES.PRIVATE,
            Permissions.USER_POST_VIEWS + Permissions.SCOPES.PRIVATE,
            Permissions.POST_CREATE,
            Permissions.POST_UPDATE + Permissions.SCOPES.PRIVATE,
            Permissions.POST_DELETE + Permissions.SCOPES.PRIVATE,
            Permissions.POST_FIND_ALL,
            Permissions.POST_FIND_ONE,
            Permissions.POST_LIKE_CREATE,
            Permissions.POST_LIKE_DELETE,
            Permissions.POST_LIKE_FIND_ALL,
            Permissions.POST_SAVE_CREATE,
            Permissions.POST_SAVE_DELETE,
            Permissions.POST_SAVE_FIND_ALL,
            Permissions.POST_COMMENT_CREATE,
            Permissions.POST_COMMENT_UPDATE + Permissions.SCOPES.PRIVATE,
            Permissions.POST_COMMENT_DELETE + Permissions.SCOPES.PRIVATE,
            Permissions.POST_COMMENT_FIND_ALL
        ];

        // Moderator role permissions
        const moderatorPermissions: string[] = [
            Permissions.USER_UPDATE + Permissions.SCOPES.PROTECTED,
            Permissions.USER_DELETE + Permissions.SCOPES.PROTECTED,
            Permissions.USER_FIND_ALL,
            Permissions.USER_FIND_ONE,
            Permissions.USER_POSTS,
            Permissions.USER_POST_LIKES,
            Permissions.USER_POST_SAVES + Permissions.SCOPES.PRIVATE,
            Permissions.USER_POST_COMMENTS + Permissions.SCOPES.PRIVATE,
            Permissions.USER_POST_COMMENT_LIKES + Permissions.SCOPES.PRIVATE,
            Permissions.USER_POST_VIEWS + Permissions.SCOPES.PRIVATE,
            Permissions.POST_UPDATE + Permissions.SCOPES.PRIVATE,
            Permissions.POST_DELETE + Permissions.SCOPES.PRIVATE,
            Permissions.POST_FIND_ALL,
            Permissions.POST_FIND_ONE,
            Permissions.POST_LIKE_CREATE,
            Permissions.POST_LIKE_DELETE,
            Permissions.POST_LIKE_FIND_ALL,
            Permissions.POST_SAVE_CREATE,
            Permissions.POST_SAVE_DELETE,
            Permissions.POST_SAVE_FIND_ALL,
            Permissions.POST_COMMENT_CREATE,
            Permissions.POST_COMMENT_UPDATE + Permissions.SCOPES.PROTECTED,
            Permissions.POST_COMMENT_DELETE + Permissions.SCOPES.PROTECTED,
            Permissions.POST_COMMENT_FIND_ALL
        ];

        // Admin role permissions
        const adminPermissions = [...moderatorPermissions];

        // Organizations
        this.organization.set(Roles.NONE, nonPermissions);
        this.organization.set(Roles.GUEST, guestPermissions);
        this.organization.set(Roles.USER, userPermissions);
        this.organization.set(Roles.CONTENT_CREATOR, contentCreatorPermissions);
        this.organization.set(Roles.MODERATOR, moderatorPermissions);
        this.organization.set(Roles.ADMIN, adminPermissions);
    }
}

const authorization = new Authorization();
export default authorization;