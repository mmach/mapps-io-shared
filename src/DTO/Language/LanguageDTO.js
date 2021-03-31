"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class LanguageDTO extends BaseDTO {
    constructor() {
        super();

        this.name = undefined;
        this.code = undefined;

    }

}
