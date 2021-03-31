"use strict";
import Validator from "better-validator";
import BaseDTO from "../../BaseObjects/baseDTO";

export default class SeoDTO extends BaseDTO {
    constructor() {
        super();
        this.project_id = undefined;
        this.fb_app_id = undefined;
        this.fb_type = undefined;
        this.fb_title = undefined;
        this.fb_image = undefined;
        this.fb_description = undefined;
        this.fb_site_name = undefined;
        this.sitemap_gen = undefined;
        this.sitemap_add_json = undefined;
        this.fb_url = undefined;

    }

}
