// @ts-nocheck
"use strict";
import BaseDTO from "../../BaseObjects/baseDTO";
import Validator from "better-validator";

export default class SearchItemDTO extends BaseDTO {
  constructor() {
    super();
    this.categoryList = undefined;
    this.freetext = undefined;
    this.distance = undefined;
    this.city = undefined;
    this.country = undefined;
    this.page = undefined;
    this.size = undefined;
    this.user_id = undefined;
    this.lat = undefined;
    this.lon = undefined;
    this.item_id = undefined
    this.tag = undefined;
    this.startDate = undefined;
    this.endDate = undefined;
    this.createdInterval=undefined;
    this.onlyExpirted=undefined;
    this.catOptions=undefined;
    this.itemLimit=undefined;

  }
  validation(state) {

  }
  prepareSearch(text, wildecard) {

    if (text.length < 2) {
      return '';
    }
    let wildecardChar = wildecard == 1 ? '*' : '';

    let freetext = text.trim();
    let cleaned = freetext.replace(/[^a-zA-Z0-9À-ž_-\s]/g, " ").split(' ').filter(item => { return item }).join(' ');
    let size = cleaned.split(' ').length;

    let form = null;
    let equal = null;
    let equal_wildecard = null;
    let near = null;
    if (size > 1) {
      //form single word
      form = cleaned.split(' ').map(item => {
        if (item.length > 2) {
          return `FORMSOF(INFLECTIONAL,"${item}") weight(0.1) `;
        }
        else null
      }).join(',')
      near = `NEAR(${cleaned.split(' ').filter(item => { return item.length > 2 }).join(',')}) weight(0.6)`
    }
    //form

    let form_whole = `FORMSOF(INFLECTIONAL,"${cleaned}") weight(0.6) `
    let wildecards
    if (size == 1) {
      equal = `${cleaned} weight(0.8)`;
      if (wildecard) {
        equal_wildecard = `${cleaned}* weight(0.6)`
      }
    }

    let query = [equal,
      equal_wildecard,
      form_whole,
      form,
      near
    ].filter(item => {
      return item;
    }).join(',');

    return `ISABOUT(${query})`;
  }
}
