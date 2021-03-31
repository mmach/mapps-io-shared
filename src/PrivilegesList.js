let PrivilegesList = {
    IS_LEADER: {
        name: "IS_LEADER",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    IS_DRIVER: {
        name: "IS_DRIVER",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    IS_ADMIN: {
        name: "IS_ADMIN",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    IS_IN_GROUP: {
        name: "IS_IN_GROUP",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    IS_OWNER: {
        name: "IS_OWNER",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    IS_VALID_COMPANY: {
        name: "IS_VALID_COMPANY",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    IS_VOLUNTEER: {
        name: "IS_VOLUNTEER",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    IS_MODERATOR: {
        name: "IS_MODERATOR",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    IS_ROOT: {
        name: "IS_ROOT",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    IS_ANONYMOUS: {
        name: "IS_ANONYMOUS",
        func: () => { },
        func_front: undefined,
        func_back: undefined
    },
    FOR_EVERYBODY: {
        name: "FOR_EVERYBODY",
        func: () => { return true },
        func_front: undefined,
        func_back: undefined
    },
    IS_LOGGED: {
        name: "IS_LOGGED",
        func: () => { return true },
        func_front: undefined,
        func_back: undefined
    },
    IS_NOT_OWNER: {
        name: "IS_NOT_OWNER",
        func: () => { return true },
        func_front: undefined,
        func_back: undefined
    },
    IS_USER_INCLUDE: {
        name: "IS_USER_INCLUDE",
        func: () => { return true },
        func_front: undefined,
        func_back: undefined
    },
    IS_WAREHOUSE_CLIENT: {
        name: "IS_LOGGED",
        func: () => { return true },
        func_front: undefined,
        func_back: undefined
    },
    IS_USER_INCLUDE_WITHOUT_OWNER:{
        name:"IS_USER_INCLUDE_WITHOUT_OWNER",
        func: () => { return true },
        func_front: undefined,
        func_back: undefined
    }
}

export default PrivilegesList;