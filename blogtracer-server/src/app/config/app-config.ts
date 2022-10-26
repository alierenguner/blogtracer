import Roles from "../../shared/roles";

export const appConfig = {
    routes: {
        auth: {
            token: {
                path: '/auth/token',
                auth: [ Roles.NONE ]
            },
            login: {
                path: '/auth/login',
                auth: [ Roles.GUEST ]
            },
            register: {
                path: '/auth/register',
                auth: [ Roles.GUEST ]
            }
        },
        user: {
            update: {
                path: '/users/:username',
                auth: [ Roles.USER, Roles.CONTENT_CREATOR, Roles.MODERATOR, Roles.ADMIN ]
            },
            delete: {
                path: '/users/:username',
                auth: [ Roles.USER, Roles.CONTENT_CREATOR, Roles.MODERATOR, Roles.ADMIN ]
            },
            findAll: {
                path: '/users',
                auth: [ Roles.USER, Roles.CONTENT_CREATOR, Roles.GUEST, Roles.MODERATOR, Roles.ADMIN ]
            },
            findOne: {
                path: '/users/:username',
                auth: [ Roles.USER, Roles.CONTENT_CREATOR, Roles.GUEST, Roles.MODERATOR, Roles.ADMIN ]
            },
        }
    }
}