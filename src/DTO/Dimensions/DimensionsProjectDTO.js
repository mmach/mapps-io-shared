"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class DimensionsProjectDTO extends BaseDTO {
    constructor() {
        super();
        this.dimension_id = undefined;
        this.project_id = undefined;
        this.status = undefined;
        this.translation_id = undefined;

    }

}
