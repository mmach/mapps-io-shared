"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class ActionsDTO extends BaseDTO {
    constructor() {
        super();

        this.name = undefined;
        this.status = undefined;
        this.description = undefined;
        this.for_category = undefined;
        this.aciton_type = undefined;

    }

}
