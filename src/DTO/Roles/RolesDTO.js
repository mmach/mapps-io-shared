"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class RolesDTO extends BaseDTO {
    constructor() {
        super();
        this.name = undefined;
        this.status = undefined;
        this.description= undefined;

    }

}
