"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class DimensionsDTO extends BaseDTO {
    constructor() {
        super();
        this.name = undefined;
        this.description = undefined;
        this.uniq_name = undefined;


    }

}
