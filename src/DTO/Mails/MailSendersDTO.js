"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class MailSendersDTO extends BaseDTO {
    constructor() {
        super();


        this.translation_id = undefined;
        this.email = undefined;
        this.password = undefined;
        this.sendgrid = undefined;
        this.smtp_host = undefined;
        this.smtp_port = undefined;
        this.smtp_security = undefined;
        this.project_id = undefined;


    }

}
