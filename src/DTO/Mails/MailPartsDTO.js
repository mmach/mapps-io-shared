"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class MailPartsDTO extends BaseDTO {
    constructor() {
        super();


        this.project_id = undefined
        this.name = undefined
        this.type = undefined
        this.body = undefined


    }

}
