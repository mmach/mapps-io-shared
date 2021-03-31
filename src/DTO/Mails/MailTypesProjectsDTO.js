"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class MailTypesProjectsDTO extends BaseDTO {
    constructor() {
        super();


        this.translation_id = undefined;
        this.mailsender_id = undefined;
        this.mail_body_id = undefined;
        this.mail_template_id = undefined;
        this.mailtype_id = undefined;
        this.project_id = undefined;


    }

}
