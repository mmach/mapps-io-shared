"use strict";

import BaseDTO from '../../BaseObjects/baseDTO';
import Validator from 'better-validator';

export default class CategoryActionsDTO extends BaseDTO {
  constructor() {
    super();
    this.id = '';
    this.action_id = undefined
    this.category_id = undefined

  };

}
