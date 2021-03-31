
let CommandList = {
    Dictionary: {
        ADD_DICTIONARY: 'addToDictionaryCommand',
        REMOVE_DICTIONARY: 'removeDictionaryCommand'
    },
    Category: {
        ADD_CATEGORY: 'insertCategoryCommand',
        SET_AS_VERIFIED: 'setAsVerifiedCommand',
        DELETE_CATEGORY: 'deleteCategoryCommand',
        SET_PARENT: 'setParentCategoryCommand',
        EDIT_CATEGORY: 'editCategoryCommand',
        INSERT_CATEGORY_ACTION: 'insertCategoryActionCommand',
        REMOVE_CATEGORY_ACTION: 'removeCategoryActionCommand'
    },
    Category_Options:
    {
        UPSERT_CATEGORY_OPTIONS: 'upsertCategoryOptionsCommand',
        DELETE_CATEGORY_OPTIONS: 'deleteCategoryOptionsCommand',
        UPSERT_CATEGORY_OPTIONS_TEMPLATE: 'upsertCategoryOptionsTemplateCommand',
        DELETE_CATEGORY_OPTIONS_TEMPLATE: 'deleteCategoryOptionsTemplateCommand',
        DELETE_CAETEGORY_OPTIONS_FOR_CATEGORY: 'deleteCategoryOptionsForCategoryCommand',
        UPSERT_CAETEGORY_OPTIONS_FOR_CATEGORY: 'upsertCategoryOptionsForCategoryCommand'
    },
    Config: {
        UPSERT_CONFIG: 'upsertConfigCommand'
    },
    User: {
        CREATE_USER: 'createUserCommand',
        AUTHORIZE_USER: 'authorizeUserCommand',
        GEN_REFRESH_TOKEN: 'genRefreshTokenCommand',
        LOG_OUT: 'logOutCommand',
        CHANGE_PASSWORD: 'changePasswordCommand',
        FORGOT_PASSWORD: 'forgotPasswordCommand',
        REMOVE_USER: 'removeUserCommand',
        FORGOT_PASSWORD_CHECK: 'sendMailForgotPasswordCommand',
        SET_LANGUAGE: 'setLanguageCommand',
        SET_COORDIATES: 'setCoordinatesCommand',
        SET_PROFILE_IMAGE: 'setProfileImageCommand',
        GRANT_USER_ROLE: 'grantUserRoleCommand',
        GRANT_USERTYPE_ROLE: 'grantUserTypeRoleCommand',
        REMOVE_USERTYPE: 'removeUserTypeCommand',
        REVOKE_USER_ROLE: 'revokeUserRoleCommand',
        REVOKE_USERTYPE_ROLE: 'revokeUserTypeRoleCommand',
        UPSERT_USERTYPE: 'upsertUserTypeCommand',
        CREATE_USER_EXTERNAL_PROV: 'createUserByExternalCommand',
        EDIT_USER: 'editUserCommand',
        UPSERT_USERS_INVOICE_DATA: 'upsertUsersInvoiceDataCommand'


    },
    Blob: {
        UPLOAD_IMAGE: 'uploadImageCommand',
        REMOVE_BLOB: 'removeBlobCommand',
        VERIFY_IMAGE: 'verifyImageCommand',
        UPLOAD_BLOB_TO_PROJECT: 'uploadBlobToProjectsStorageCommand',
        // REMOVE_BLOB_AS_ADMIN:'removeBlobAsAdminCommand'

    },
    Item: {
        NEW_ITEM: 'createItemCommand',
        EDIT_ITEM: 'editItemCommand',
        SYNC_ITEM: 'syncItemCommand',
        SET_SYNC: 'setItemSyncCommand',
        REMOVE_ITEM: 'removeItemCommand',
        RESERVATION_ITEM: 'reservationItemCommand',
        Actions: {
            Reservation: {
                ACCEPT: 'itemActionsReservationAcceptCommand',
                REJECT: 'itemActionsReservationRejectCommand',
                CANCELLED: 'itemActionsReservationCancelCommand',
                PAID: 'itemActionsReservationPaidCommand',
                COMPLETE: 'itemActionsReservationCompleteCommand',
                CLOSED: 'itemActionsReservationClosedCommand',
                WAITING_FOR_PAY: 'itemActionsReservationWaitingForPayCommand',
                WAITING_FOR_RATE_CLIENT: 'itemActionsReservationWaitingForClientCommand',
                WAITING_FOR_RATE_CUSTOMER: 'itemActionsReservationWaitingForCustomerCommand'


            }
        }
    },
    Roles: {
        CREATE_ROLE_GLOBAL: 'createRoleCommand',
        GRANT_ROLE_TO_PROJECT: 'grantRoleToProjectCommand',
        REVOKE_ROLE_TO_PROJECT: 'revokeRoleFromProjectCommand',

    },
    Privileges: {
        DELETE_PRIV_GLOBALLY: 'deletePrivilegesCommand',
        DELETE_PRIV: 'deletePrivilegesProjectCommand',
        UPSERT_PRIV_GLOBALLY: 'upsertPrivilegesCommand',
        UPSERT_PRIV: 'upsertPrivilegesProjectCommand',

    },
    Dimensions: {
        DELETE_DIM_GLOBALLY: 'deleteDimensionCommand',
        DELETE_DIM: 'deleteDimensionProjectCommand',
        UPSERT_DIM_GLOBALLY: 'upsertDimensionCommand',
        UPSERT_DIM: 'upsertDimensionProjectCommand',

    },

    Languages: {
        DELETE_LANGUAGE: 'deleteLanguageFromProjectCommand',
        INSERT_LANGUAGE_GLOBAL: 'insertLanguageCommand',
        INSERT_LANGUAGE: 'insertLanguageToProjectCommand',
        SET_AS_MAIN_LANG: 'setAsMainLanguageCommand',
        UPSERT_TRANSLATION: 'upsertTranslateCommand'
    },
    Actions: {
        DELETE_GLOBAL_ACTIONS: 'deleteActionCommand',
        DELETE_ACTIONS: 'deleteActionsProjectCommand',
        DELETE_ACTIONS_PRIVS: 'deleteActionPrivilegesCommand',
        UPSERT_GLOBAL_ACTIONS: 'upsertActionCommand',
        UPSERT_ACTIONS: 'upsertActionsProjectCommand',
        UPSERT_ACTIONS_PRIVS: 'upsertActionPrivilegesCommand',
    },
    Project: {
        CHOOSE_PLAN: 'choosePlanCommand',
        INSERT_PROJECT: 'insertProjectCommand',
        RUN_BUILD: 'runBuildCommand',
        SET_PROGRESS: 'setProjectBuildProgressCommand',
        UPDATE_PROJECT: 'updateProjectCommand',
        UPLOAD_BLOB: 'uploadBlobProjectCommand',
    },
    Mail: {
        DELETE_MAIL_SENDER: 'removeMailSenderCommand',
        DELETE_MAIL_TYPE: 'removeMailTypeCommand',
        DELETE_MAIL_TYPE_PROJECT: 'removeMailTypeProjectCommand',
        DELETE_MAIL_PART: 'removeMailPartCommand',
        UPSERT_MAIL_SENDER: 'upsertMailSenderCommand',
        UPSERTE_MAIL_TYPE: 'upsertMailTypeCommand',
        UPSERT_MAIL_TYPE_PROJECT: 'upsertMailTypeProjectCommand',
        UPSERT_MAIL_PART: 'upsertMailPartCommand',
    },
    Seo: {
        UPSERT_SEO: 'upsertSeoCommand',

    },
    Messages: {
        CLOSE_CONVERSATION: 'closeConversationCommand',
        CREATE_CONVERSATION: 'createConversationCommand',
        SEND_MESSAGE: 'sendMessageCommand',
        READ_MSG: 'readMessageCommand',


    },
    Status: {
        LINK_STATUS_ACTION: 'linkStatusActionCommand',
        REMOVE_STATUS: 'removeStatusCommand',
        UNLINK_STATUS_ACTION: 'unlinkStatusActionCommand',
        UPSERT_STATUS: 'upsertStatusCommand',
        UPSERT_STATUS_GLOBAL: 'upsertStatusGlobalCommand'
    },
    Process: {
        UPSERT_PROCESS: 'upsertProcessCommand',
        UPSERT_CHAIN_ELEMENT: 'upsertProcessChainElementCommand',
        UPSERT_CHAIN_STATE: 'upsertProcessElementStateCommand',
        INVOKE_PROCESS: 'invokeProcessCommand',
        DELETE_PROCESS: 'deleteProcessCommand',
        DELETE_CHAIN_ELEMENT: 'deleteProcessChainElementCommand',
        DELETE_CHAIN_STATE: 'deleteProcessElementStateCommand',
    }

}
export default CommandList;