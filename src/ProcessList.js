let ProcessList = {
    Item: {
        IUA_RESERVATION_ACCEPT: 'iua_ReservationAcceptProcess',
        IUA_WAITING_FOR_PAY: 'iua_WaitingForPayProcess',
        IUA_REJECT: 'iua_RejectProcess',
        IUA_NEW: 'iua_NewProcess',
        IUA_CANCELLED_BY_ADMIN: 'iua_CancelledByAdminProcess',
        IUA_CANCELLED_BY_OWNER: 'iua_CancelledByOwnerProcess',
        IUA_CANCELLED_BY_CLIENT: 'iua_CancelledByClientProcess',
        IUA_VERIFY_COMPANY: 'iua_VerifyCompanyProcess',
        IUA_PAID: 'iua_PaidProcess',
        IUA_READY: 'iua_ReadyProcess',
        IUA_START: 'iua_StartProcess',
        IUA_END: 'iua_EndProcess',
        IUA_WAITING_TO_ITEM_COMMENT: 'iua_WaitingForCommentToItemProcess',
        IUA_WAITING_OWNER_COMMENT: 'iua_WaitingForCommentOwnerProcess',
        IUA_CLOSE: 'iua_CloseProcess',
        IUA_CANCELLED_RESERVATION: 'iua_CancelledReservationProcess',
        IUA_ITEM_SYNC: 'iua_ItemSyncProcess',
        IUA_UNBLOCK_CHAT: 'iua_UnblockChatProcess',
        IUA_BLOCK_CHAT: 'iua_BlockChatProcess',
        IUA_CLOSE_CHAT: 'iua_CloseChatProcess',
        IUA_ITEM_TRANSACTION_SYNC: 'iua_ItemsTransactionSyncProcess',
        IUA_REMOVE_ITEM_TRANSACTION_SYNC: 'iua_ItemsTransactionSyncProcess',
        IUA_REMOVE_ITEM_SYNC: 'iua_RemoveItemSyncProcess',
        IUA_SET_TO_ITEM_COMMENT: 'iua_SetToItemCommentProcess',
        IUA_SET_USER_COMMENT: 'iua_SetToUserCommentProcess',
        IUA_ACCEPT_COMMENTS: 'iua_AcceptCommentsProcess',
        
        IUA_DAY_COUNTER_REMINDER: 'iua_DayCounterProcessReminder',
        IUA_INVOICE_REMINDER: 'iua_InvoiceProcessReminder',
        IUA_BASED_ON_DIM_REMINDER: 'iua_BasedOnDimProcessReminder',
        
        ITEM_CREATE_ITEM: 'item_CreateItemProcess',
        ITEM_SET_VERIFY: 'item_SetVerifyProcess',
        ITEM_SET_EXPIRED: 'item_SetExpiredProcess',
        ITEM_SYNC_ITEM: 'item_SyncItemProcess',
        ITEM_REMOVE_ITEM: 'item_RemoveItemProcess',
        ITEM_SET_UNVERIFIED: 'item_SetUnverifiedProcess',
        ITEM_REMOVE_FROM_ES: 'item_RemoveFromESProcess',
        ITEM_EDIT_ITEM: 'item_EditItemProcess',
        ITEM_SET_READY: 'item_SetReadyProcess',
    }


}

export default ProcessList;