import PermissionScopes from "@core-shared/enums/permission-scopes";
import Permissions from "@core-shared/enums/permissions";
import Roles from "@core-shared/enums/roles";

class AuthOrganization {
    public readonly permissions = new Map();

    constructor() {
        this.organizePublicPermissions();
        this.organizeGuestPermissions();
        this.organizeUserPermissions();
        this.organizeContentCreatorPermissions();
        this.organizeModeratorPermissions();
        this.organizeAdminPermissions();
    }

    /** Description: Public permissions */
    private organizePublicPermissions() {
        const publicPermissions: string[] = [
            Permissions.Auth.TOKEN
        ];

        this.permissions.set(Roles.NONE, publicPermissions);
    }

    /** Description: Guest role permissions */
    private organizeGuestPermissions() {
        const guestPermissions: string[] = [
            Permissions.Auth.LOGIN,
            Permissions.Auth.REGISTER
        ];

        this.permissions.set(Roles.GUEST, guestPermissions);
    }

    /** Description: User role permissions */
    private organizeUserPermissions() {
        const userPermissions: string[] = [
            Permissions.User.UPDATE + PermissionScopes.PRIVATE,
            Permissions.User.DELETE + PermissionScopes.PRIVATE,
            Permissions.User.FIND_ALL,
            Permissions.User.FIND_ONE,
            Permissions.User.POSTS,
            Permissions.User.POST_LIKES,
            Permissions.User.POST_SAVES + PermissionScopes.PRIVATE,
            Permissions.User.POST_COMMENTS + PermissionScopes.PRIVATE,
            Permissions.User.POST_COMMENT_LIKES + PermissionScopes.PRIVATE,
            Permissions.User.POST_VIEWS + PermissionScopes.PRIVATE,
            Permissions.Post.FIND_ALL,
            Permissions.Post.FIND_ONE,
            Permissions.PostLike.CREATE,
            Permissions.PostLike.DELETE,
            Permissions.PostLike.FIND_ALL,
            Permissions.PostSave.CREATE,
            Permissions.PostSave.DELETE,
            Permissions.PostSave.FIND_ALL,
            Permissions.PostComment.CREATE,
            Permissions.PostComment.UPDATE + PermissionScopes.PRIVATE,
            Permissions.PostComment.DELETE + PermissionScopes.PRIVATE,
            Permissions.PostComment.FIND_ALL
        ];

        this.permissions.set(Roles.USER, userPermissions);
    }

    /** Description: Content creator role permissions */
    private organizeContentCreatorPermissions() {
        const contentCreatorPermissions: string[] = [
            Permissions.User.UPDATE + PermissionScopes.PRIVATE,
            Permissions.User.DELETE + PermissionScopes.PRIVATE,
            Permissions.User.FIND_ALL,
            Permissions.User.FIND_ONE,
            Permissions.User.POSTS,
            Permissions.User.POST_LIKES,
            Permissions.User.POST_SAVES + PermissionScopes.PRIVATE,
            Permissions.User.POST_COMMENTS + PermissionScopes.PRIVATE,
            Permissions.User.POST_COMMENT_LIKES + PermissionScopes.PRIVATE,
            Permissions.User.POST_VIEWS + PermissionScopes.PRIVATE,
            Permissions.Post.CREATE,
            Permissions.Post.UPDATE + PermissionScopes.PRIVATE,
            Permissions.Post.DELETE + PermissionScopes.PRIVATE,
            Permissions.Post.FIND_ALL,
            Permissions.Post.FIND_ONE,
            Permissions.PostLike.CREATE,
            Permissions.PostLike.DELETE,
            Permissions.PostLike.FIND_ALL,
            Permissions.PostSave.CREATE,
            Permissions.PostSave.DELETE,
            Permissions.PostSave.FIND_ALL,
            Permissions.PostComment.CREATE,
            Permissions.PostComment.UPDATE + PermissionScopes.PRIVATE,
            Permissions.PostComment.DELETE + PermissionScopes.PRIVATE,
            Permissions.PostComment.FIND_ALL
        ];

        this.permissions.set(Roles.CONTENT_CREATOR, contentCreatorPermissions);
    }

    /** Description: Moderator role permissions */
    private organizeModeratorPermissions() {
        const moderatorPermissions: string[] = [
            Permissions.User.UPDATE + PermissionScopes.PROTECTED,
            Permissions.User.DELETE + PermissionScopes.PROTECTED,
            Permissions.User.FIND_ALL,
            Permissions.User.FIND_ONE,
            Permissions.User.POSTS,
            Permissions.User.POST_LIKES,
            Permissions.User.POST_SAVES + PermissionScopes.PRIVATE,
            Permissions.User.POST_COMMENTS + PermissionScopes.PRIVATE,
            Permissions.User.POST_COMMENT_LIKES + PermissionScopes.PRIVATE,
            Permissions.User.POST_VIEWS + PermissionScopes.PRIVATE,
            Permissions.Post.UPDATE + PermissionScopes.PRIVATE,
            Permissions.Post.DELETE + PermissionScopes.PRIVATE,
            Permissions.Post.FIND_ALL,
            Permissions.Post.FIND_ONE,
            Permissions.PostLike.CREATE,
            Permissions.PostLike.DELETE,
            Permissions.PostLike.FIND_ALL,
            Permissions.PostSave.CREATE,
            Permissions.PostSave.DELETE,
            Permissions.PostSave.FIND_ALL,
            Permissions.PostComment.CREATE,
            Permissions.PostComment.UPDATE + PermissionScopes.PROTECTED,
            Permissions.PostComment.DELETE + PermissionScopes.PROTECTED,
            Permissions.PostComment.FIND_ALL
        ];

        this.permissions.set(Roles.MODERATOR, moderatorPermissions);
    }

    /** Description: Content creator role permissions */
    private organizeAdminPermissions() {
        const adminPermissions: string[] = [
            Permissions.User.UPDATE + PermissionScopes.PROTECTED,
            Permissions.User.DELETE + PermissionScopes.PROTECTED,
            Permissions.User.FIND_ALL,
            Permissions.User.FIND_ONE,
            Permissions.User.POSTS,
            Permissions.User.POST_LIKES,
            Permissions.User.POST_SAVES + PermissionScopes.PRIVATE,
            Permissions.User.POST_COMMENTS + PermissionScopes.PRIVATE,
            Permissions.User.POST_COMMENT_LIKES + PermissionScopes.PRIVATE,
            Permissions.User.POST_VIEWS + PermissionScopes.PRIVATE,
            Permissions.Post.UPDATE + PermissionScopes.PRIVATE,
            Permissions.Post.DELETE + PermissionScopes.PRIVATE,
            Permissions.Post.FIND_ALL,
            Permissions.Post.FIND_ONE,
            Permissions.PostLike.CREATE,
            Permissions.PostLike.DELETE,
            Permissions.PostLike.FIND_ALL,
            Permissions.PostSave.CREATE,
            Permissions.PostSave.DELETE,
            Permissions.PostSave.FIND_ALL,
            Permissions.PostComment.CREATE,
            Permissions.PostComment.UPDATE + PermissionScopes.PROTECTED,
            Permissions.PostComment.DELETE + PermissionScopes.PROTECTED,
            Permissions.PostComment.FIND_ALL
        ];

        this.permissions.set(Roles.ADMIN, adminPermissions);
    }
}

const authOrganization = new AuthOrganization();
export default Object.freeze(authOrganization);