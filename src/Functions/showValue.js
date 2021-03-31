import { isUuid, uuid } from 'uuidv4';


function ShowOptionValue(item, itemCategories,lang) {
    if (item.category_link.catOption.cat_opt.type == "SELECT") {
        return selectValue(item,lang);
    }
    else if (item.category_link.catOption.cat_opt.type == "MULTI_SELECT") {
        return selectValue(item,lang);
    }
    else if (item.category_link.catOption.cat_opt.type == "SINGLE") {
        return singleValue(item,lang);
    }
    else if (item.category_link.catOption.cat_opt.type == "GEOCOORDINATE") {
        return singleValue(item,lang);
    }
    else if (item.category_link.catOption.cat_opt.type == "BETWEEN") {
        return "TO_DOOOOO"
    }
    else if (item.category_link.catOption.cat_opt.type == "IMAGE") {
        return "TO_DOOOOO"
    }
    else if (item.category_link.catOption.cat_opt.type == "CASE") {
        return item.value
    }
    else if (item.category_link.catOption.cat_opt.type == "SINGLE_DEPENDENCY") {
        return singleDependencyValue(item, itemCategories,lang)
    }
    else {
        ; return item.value;
    }
}

function singleValue(item) {
    return item.value
}

function singleDependencyValue(item, itemCategories,lang) {
    let single = itemCategories.filter(i => { return i.col_id == item.col_id }).sort((a, b) => { return Number(a.cat_opt_temp.order) > Number(b.cat_opt_temp.order) ? 1 : -1 });
    single = single.map(i => {

        if (isUuid(i.value) && i.value != i.co_temp_id) {

            let tmp = itemCategories.filter(ic => {
                return ic.co_temp_id == i.value
            })[0];
            i.show = tmp ? tmp.cat_opt_temp["value_" + lang] : ''
        }
        return i;
    });
    let dim = single[1]
    return item.value + " " + single[1].show
}

function selectValue(item,lang) {
    return item.cat_opt_temp["value_" + lang]
}

export {ShowOptionValue}
