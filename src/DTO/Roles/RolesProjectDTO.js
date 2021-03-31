"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class RolesProjectDTO extends BaseDTO {
    constructor() {
        super();
        this.role_id = undefined;
        this.project_id = undefined;
    }

}
