// @ts-nocheck
"use strict";
import BaseDTO from "../../BaseObjects/baseDTO";
import Validator from "better-validator";

export default class ItemTransactionsDTO extends BaseDTO {
  constructor() {
    super(); 
    this.item_id=undefined
    this.name=undefined
    this.description=undefined
    this.user_id=undefined
    this.longitude=undefined
    this.latitude=undefined
    this.category_id=undefined
    this.blob_id=undefined
    this.category_type=undefined
    this.status=undefined
    this.expired_date=undefined
    this.external_id=undefined
    this.project_id=undefined
    this.iua_id=undefined
  }
  validation(state) {

  }
}
