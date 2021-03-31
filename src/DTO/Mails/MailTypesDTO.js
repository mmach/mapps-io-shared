"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class MailTypesDTO extends BaseDTO {
    constructor() {
        super();

       
          this.token=undefined
          this.description=undefined
          this.bodyPayload=undefined
          this.templatePayload=undefined
          this.body=undefined
           this.templateBody=undefined

    }

}
