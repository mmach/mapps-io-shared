"use strict";

import { isUuid, uuid } from 'uuidv4';


export default class BaseDTO {
    constructor() {
        this.id = uuid()
        this.uid=''
    };
    validation(state) {
        return [];
    }
    log() {
        return this;
    }
};
