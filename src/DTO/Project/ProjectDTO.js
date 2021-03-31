// @ts-nocheck
"use strict";
import BaseDTO from "../../BaseObjects/baseDTO";
import Validator from "better-validator";

export default class ProjectDTO extends BaseDTO {
    constructor() {
        super();
        this.name = undefined;
        this.user_id = undefined;
        this.project_Id = undefined;
        this.secretKey = undefined
        this.categories_from_parent = undefined
        this.theme_color = undefined
        this.root_category_id = undefined
        this.item_to_parent = undefined
        this.logo_url = undefined
        this.status = undefined
        this.base_url = undefined
        this.contact_mail = undefined
        this.blob_logo_id = undefined
        this.blob_logo_hor_id = undefined
        this.blob_logo_ver_id = undefined
        this.blob_main_id = undefined
        this.description = undefined
        this.user_id = undefined
        this.plan_id = undefined
        this.auth_url = undefined


    }
    validation(state) {

    }
}
