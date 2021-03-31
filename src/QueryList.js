let QueryList = {
    Dictionary: {
        GET_DICTIONARY: 'getDictionariesQuery'
    },
    Category: {
        GET_CATEGORIES: 'getCategoryQuery',
        GET_CATEGORIES_HIERARCHY: 'getCategoryTreeQuery',
        GET_CATEGORIES_FREETEXT: 'getCategoryFreetextQuery',
        GET_CATEGORIES_ALL_TREE: 'getCategoriesAllQuery',
        GET_CATEGORY_ACTIONS: 'getCategoryActionsQuery'

    },
    CategoryOptions: {
        GET_OPTIONS_TYPE: 'getCategoryOptionsTypeQuery',
        GET_CATEGORY_OPTION: 'getCategoryOptionsQuery',
        GET_ALL_CETEGORIES_OPTIONS: 'getAllCategoryOptionsQuery',
        GET_CATEGORY_LINK_BY_ID: 'getCategoryLinkQuery'


    },
    User: {
        LOG_IN_INTERNAL: 'userLogInInternalQuery',
        LOG_IN_BY_REFRESH_TOKEN: 'logInByRefreshTokenQuery',
        GET_REFRESH_TOKEN: 'getRefreshTokenQuery',
        USER_INFO: 'getUserInfoQuery',
        LOGIN_BY_EXTERNAL: 'logInByExternalQuery',
        GET_USER_TYPES: 'getUserTypesQuery',
        GET_ALL_USERS: 'getUsersQuery',
        GET_USER_INVOICE_DATA: 'getUsersInvoiceDataQuery'


    },
    Blob: {
        GET_BLOBS_BY_GUIDS: 'getBlobsBase64ByGuidsQuery',
        GET_USER_IMAGES: 'getUserImagesQuery',
        GET_UNVERIFIED: 'getUnverifiedBlobsQuery',
        GET_PROJECT_STORAGE: 'getProjectsStorageQuery'

    },
    Item: {
        GET_ITEM: 'getItemQuery',
        GET_ITEM_BY_ID: 'getItemByIdQuery',
        SEARCH_ITEM: 'searchItemQuery',
        GET_USER_ITEMS: 'getUserItemQuery',
        GET_USER_ITEMS_TO_SYNC: 'getUserItemToSyncQuery',
        GET_USER_TRANSACTIONS: 'getItemTransactionQuery',
        GET_ITEM_USER_ACTIONS: 'getItemUserActionsQuery',
        GET_ITEM_USER_ACTIONS: 'getItemUserActionsQuery',
        GET_ITEM_USER_ACTIONS_LIST: 'getItemUserActionsListQuery',
        GET_ITEM_USER_ACTIONS_HISTORY: 'getItemUserActionsHistoryQuery',
        GET_ITEM_USER_ACTIONS_ADMIN: 'getItemUserActionsAdminQuery',

    },
    Country: {
        GET_COUNTRY: 'getCountriesQuery',
        GET_COUNTRY_BY_ID: 'getCountriesByIdQuery'
    },
    City: {
        GET_CITY: 'getCitiesQuery',
        REVERSE_GEO: 'reverseGeocodeQuery',
        REVERSE_LATLNG_GEO: 'geocodeQuery'
    },
    Project: {
        LOGIN_JS: 'loginJustshareProjectQuery',
        LOGIN: 'loginProjectQuery',
        LOGIN_APPTRUTH: 'loginApptruthProjectQuery',
        LOGIN_LOGISTIC: 'loginLogisticProjectQuery',
        LOGIN_BLISKO_NAS: 'loginBliskoNasProjectQuery',
        GET_PROJECT_INFO: 'getProjectQuery',
        GET_USERS_PROJECTS: 'getUsersProjectsQuery',
        GET_PROJECT_USERS: 'getProjectUsersQuery',
        GET_PROJECT_SOCKETS: 'getProjectsSocketsQuery'
    },
    Roles: {
        GET_ROLES: 'getProjectRolesQuery',
        GET_GLOBAL_ROLES: 'getRolesQuery',

    },
    Privileges: {
        GET_PRIVS: 'getPrivilegesQuery',
        GET_GLOBAL_PRIVS: 'getProjectPrivilegesQuery',

    },
    Dimensions: {
        GET_DIM: 'getProjectDimensiosQuery',
        GET_GLOBAL_DIM: 'getDimensionsQuery',

    },
    Languages: {
        GET_GLOBAL_LANGUAGES: 'getLanguagesQuery',
        GET_LANGUAGES: 'getProjectLanguagesQuery',
        TRANSLATE: 'translateQuery'
    },
    Actions: {
        GET_GLOBAL_ACTIONS: 'getActionsQuery',
        GET_ACTIONS: 'getProjectActionsQuery',
    },
    Common: {
        MJML_COMPILE: 'mjmlCompileQuery',
    },
    Mail: {
        GET_MAIL_SENDER: 'getMailSendersQuery',
        GET_MAIL_TYPE: 'getMailTypesQuery',
        GET_MAIL_TYPE_PROJECT: 'getMailTypeProjectQuery',
        GET_MAIL_PART: 'getMailPartQuery',
    },
    Seo: {
        GET_SEO: 'getSeoQuery',
    },
    Messages: {
        GET_CONV_MESSAGES: 'getConversationQuery',
        GET_CONVERSATION: 'getConversationsQuery',
        GET_UNREAD_MSG: 'getToReadMessagesQuery'
    },
    Invoice: {
        GET_USER_INVOICES: 'getUserInvoicesQuery'
    },
    Status: {
        GET_GLOBAL_STATUSES: 'getStatusGlobalQuery',
        GET_STATUS: 'getStatusQuery'
    },
    Process: {
        GET_PROCESS: 'getProcessQuery',
        

    }

}

export default QueryList;