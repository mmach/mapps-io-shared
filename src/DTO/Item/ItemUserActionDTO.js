// @ts-nocheck
"use strict";
import BaseDTO from "../../BaseObjects/baseDTO";
import Validator from "better-validator";

export default class ItemUserActionDTO extends BaseDTO {
  constructor() {
    super();
    this.iua_id=undefined
    this.project_id=undefined
    this.item_id=undefined
    this.user_id=undefined
    this.action_id=undefined
    this.comment=undefined
    this.rating=undefined
    this.status=undefined
  }
  validation(state) {

  }
}
