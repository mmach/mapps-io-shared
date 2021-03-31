// @ts-nocheck
"use strict";
import BaseDTO from '../../BaseObjects/baseDTO';
import Validator from 'better-validator';

export default class UserTypeRolesDTO extends BaseDTO {
  constructor() {
    super();
    this.usertype_id = undefined;
    this.project_id = undefined;
    this.role_id = undefined;
    this.name = undefined;
  };
  validation(state) {
   
  };
}

