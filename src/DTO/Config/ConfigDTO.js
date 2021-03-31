// @ts-nocheck
"use strict";
import BaseDTO from "../../BaseObjects/baseDTO";
import Validator from "better-validator";

export default class ConfigDTO extends BaseDTO {
  constructor() {
    super();
    this.id = "";
    this.project_id = "";
    this.type = "";
    this.lang = "";
    this.body = ''
  
  }
  validation(state) {

  }
}
