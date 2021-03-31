"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class ActionsProjectDTO extends BaseDTO {
    constructor() {
        super();

        this.action_id = undefined;
        this.project_id = undefined;
        this.status = undefined;

    }

}
