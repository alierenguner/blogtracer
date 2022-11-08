/** Description: Contains app permissions. */
namespace Permissions {
    // Permission Scopes
    export const SCOPES = {
        PUBLIC: '.public',
        PROTECTED: '.protected',
        PRIVATE: '.private',
    }

    // Auth Permissions
    export const AUTH_TOKEN = 'permission.auth.token';
    export const AUTH_LOGIN = 'permission.auth.login';
    export const AUTH_REGISTER = 'permission.auth.register';

    // User Permissions
    export const USER_UPDATE = 'permission.user.update';
    export const USER_DELETE = 'permission.user.delete';
    export const USER_FIND_ALL = 'permission.user.findall';
    export const USER_FIND_ONE = 'permission.user.findone';

    export const USER_POSTS = 'permission.user.posts';
    export const USER_POST_LIKES = 'permission.user.postlikes';
    export const USER_POST_SAVES = 'permission.user.postsaves';
    export const USER_POST_COMMENTS = 'permission.user.postcomments';
    export const USER_POST_COMMENT_LIKES = 'permission.user.postcommentlikes';
    export const USER_POST_VIEWS = 'permission.user.views';

    // Post Permissions
    export const POST_CREATE = 'permission.post.create';
    export const POST_UPDATE = 'permission.post.update';
    export const POST_DELETE = 'permission.post.delete';
    export const POST_FIND_ALL = 'permission.post.findall';
    export const POST_FIND_ONE = 'permission.post.findone';

    // Post Like Permissions 
    export const POST_LIKE_CREATE = 'permission.postlike.create'
    export const POST_LIKE_DELETE = 'permission.postlike.delete'
    export const POST_LIKE_FIND_ALL = 'permission.postlike.findall';

    // Post Save Permissions
    export const POST_SAVE_CREATE = 'permission.postsave.create';
    export const POST_SAVE_DELETE = 'permission.postsave.delete';
    export const POST_SAVE_FIND_ALL = 'permission.postsave.findall'

    // Post Comment Permissions
    export const POST_COMMENT_CREATE = 'permission.postcomment.create';
    export const POST_COMMENT_UPDATE = 'permission.postcomment.update';
    export const POST_COMMENT_DELETE = 'permission.postcomment.delete';
    export const POST_COMMENT_FIND_ALL = 'permission.postcomment.findall';
}

export default Permissions;