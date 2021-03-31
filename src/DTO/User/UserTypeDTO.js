// @ts-nocheck
"use strict";
import BaseDTO from '../../BaseObjects/baseDTO';
import Validator from 'better-validator';

export default class UserTypeDTO extends BaseDTO {
  constructor() {
    super();
    this.id = undefined
    this.translation_id = undefined;
    this.project_id = undefined;
    this.name = undefined;
    this.blob_id = undefined;
  };
  validation(state) {

  };
}

