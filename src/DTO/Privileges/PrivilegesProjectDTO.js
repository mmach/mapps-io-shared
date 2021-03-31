"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class PrivilegesProjectDTO extends BaseDTO {
    constructor() {
        super();
        this.privilege_id = undefined;
        this.project_id = undefined;
        this.status = undefined;
    }

}
