"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class ToTranslateDTO extends BaseDTO {
    constructor() {
        super();

        this.src = undefined;
        this.langTo = undefined;
        this.langSrc = undefined;

    }

}
