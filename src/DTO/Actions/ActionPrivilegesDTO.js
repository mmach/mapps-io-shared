"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class ActionPrivilegesDTO extends BaseDTO {
    constructor() {
        super();

        this.privilege_id = undefined;
        this.project_id = undefined;
        this.action_id = undefined;
        this.logical_op = undefined;
        this.status = undefined;

    }

}
