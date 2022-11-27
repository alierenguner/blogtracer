/** Description: Contains app permissions. */
namespace Permissions {
    /** Description: Auth Permissions */
    export enum Auth {
        TOKEN = 'permission.auth.token',
        LOGIN = 'permission.auth.login',
        REGISTER = 'permission.auth.register'
    }

    /** Description: User Permissions */
    export enum User {
        UPDATE = 'permission.user.update',
        DELETE = 'permission.user.delete',
        FIND_ALL = 'permission.user.findall',
        FIND_ONE = 'permission.user.findone',
        POSTS = 'permission.user.posts',
        POST_LIKES = 'permission.user.postlikes',
        POST_SAVES = 'permission.user.postsaves',
        POST_COMMENTS = 'permission.user.postcomments',
        POST_COMMENT_LIKES = 'permission.user.postcommentlikes',
        POST_VIEWS = 'permission.user.views'
    }

    /** Description: Post Permissions */
    export enum Post {
        CREATE = 'permission.post.create',
        UPDATE = 'permission.post.update',
        DELETE = 'permission.post.delete',
        FIND_ALL = 'permission.post.findall',
        FIND_ONE = 'permission.post.findone'
    }

    /** Description: User Like Permissions */
    export enum PostLike {
        CREATE = 'permission.postlike.create',
        DELETE = 'permission.postlike.delete',
        FIND_ALL = 'permission.postlike.findall'
    }

    /** Description: User Save Permissions */
    export enum PostSave {
        CREATE = 'permission.postsave.create',
        DELETE = 'permission.postsave.delete',
        FIND_ALL = 'permission.postsave.findall'
    }

    /** Description: User Comment Permissions */
    export enum PostComment {
        CREATE = 'permission.postcomment.create',
        UPDATE = 'permission.postcomment.update',
        DELETE = 'permission.postcomment.delete',
        FIND_ALL = 'permission.postcomment.findall'
    }
}

export default Permissions;