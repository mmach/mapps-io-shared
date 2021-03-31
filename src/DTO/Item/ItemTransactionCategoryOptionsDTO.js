// @ts-nocheck
"use strict";
import BaseDTO from "../../BaseObjects/baseDTO";
import Validator from "better-validator";

export default class ItemTransactionCategoryOptionsDTO extends BaseDTO {
  constructor() {
    super(); 
    this.ico_id=undefined
    this.item_id=undefined
    this.itemTransaction_id=undefined
    this.co_temp_id=undefined
    this.col_id=undefined
    this.value=undefined
    this.status=undefined
    this.iua_id=undefined
    this.dim_id=undefined
    this.project_id=undefined
  }
  validation(state) {

  }
}
