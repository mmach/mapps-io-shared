"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class LanguageProjectDTO extends BaseDTO {
    constructor() {
        super();
        this.language_id = undefined;
        this.project_id = undefined;
        this.status = undefined;
        this.is_main = undefined;
    }

}
