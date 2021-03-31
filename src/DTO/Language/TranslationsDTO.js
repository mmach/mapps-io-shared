"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class TranslationsDTO extends BaseDTO {
    constructor() {
        super();

        this.name = undefined;
        this.pl = undefined;
        this.us = undefined;
        this.no = undefined;
        this.de = undefined;
        this.zh_cn = undefined;
        this.fr = undefined;
        this.es = undefined;
        this.ru = undefined;

    }

}
