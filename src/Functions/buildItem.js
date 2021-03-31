import { ONP, isDIM } from "./onp";
import { isUuid, uuid } from 'uuidv4';
import { ShowOptionValue } from './showValue.js'

function BuildItem(item, catOptions, additionalFilter, dimensions, lang) {
    let itemsCO = [...item.itemCategoryOption];
    let coItems = []
    //  console.log(catOptions)
    //   console.log(coSearch)
    //   console.log(item)

    catOptions.forEach(co => {
        if (co.is_form_hidden == true) {
            co.cat_opt_temp.forEach(co_temp => {

                let val = undefined;
                if (co_temp.is_from_url) {

                    additionalFilter.forEach(p => {
                        if (p.id == co_temp.id) {

                            val = p.val
                        }
                    })
                }

                coItems.push({
                    cat_opt_temp: co_temp,
                    co_temp_id: co_temp.id,
                    id: uuid(),
                    item_id: item.id,
                    value: val ? val : undefined,
                    col_id: co.category_link[0].id,
                    category_link: {
                        ...co.category_link[0],
                        catOption: co
                    },
                    dim_id: co_temp.dim_id ? co_temp.dim_id : co.dim_id
                })

            })
        } else {

            itemsCO.filter(i => { return i.col_id == co.category_link[0].id }).forEach(i => {
                let temp = co.cat_opt_temp.filter(c => { return c.id == i.co_temp_id })[0];
                coItems.push({
                    ...i,
                    cat_opt_temp: temp,
                    co_temp_id: temp.id,
                    id: uuid(),
                    item_id: item.id,
                    value: i.value,
                    col_id: co.category_link[0].id,
                    category_link: {
                        ...co.category_link[0],
                        catOption: co
                    },
                    dim_id: temp.dim_id ? temp.dim_id : co.dim_id
                })

            })


        }
    })
    itemsCO = [...coItems]

    let coWithFunc = []

    var set = {}
    itemsCO.forEach(item => {
        let element = dimensions.filter(d => { return d.id == item.dim_id })[0];
        item.dim = element && element.name

        if (item.cat_opt_temp.func) {
            coWithFunc.push(item)
        } else {
            if (item.dim) {

                set[item.dim] = item
            }
        }
    })
    let i = 15

    while (coWithFunc.length > 0 && (--i) > 0) {

        coWithFunc.forEach(item => {
            let hashSet = {}
            Array.from(item.cat_opt_temp.func.match(/(#|#\$)\w*#/g)).forEach(a => {
                hashSet[a] = a;
            })
            let dims = Object.keys(hashSet).map(i => { return i })   ///[#]\b[a-zA-Z0-9_]*[#]/g
            dims = dims.filter(i => { return isDIM(i) });
            let func = item.cat_opt_temp.func
            dims = dims.map(d => { return d.replace(/#/g, '').replace('$', '') })
            if (dims.filter(name => { return set[name] }).length == dims.length) {
                if (item.dim) {
                    set[item.dim] = item

                }
                let dimsConfigs = dimensions.filter(i => { return dims.filter(d => { return i.name == d }).length > 0 });
                itemsCO.forEach(i => {
                    if (dimsConfigs.filter(d => { return d.id == i.dim_id }).length > 0) {
                        func = func.split("$" + i.dim).join(i.value)
                    }
                })
                let type = item.category_link.catOption.cat_opt.type;
                if (type == 'CASE') {
                    itemsCO = [...itemsCO.filter(ico => {
                        if (ico.co_temp_id == item.co_temp_id) {
                            ico.value = ONP(func);
                            return ico.value == true
                        } else {
                            return true
                        }

                    }).map(ico => {
                        if (ico.co_temp_id == item.co_temp_id) {
                            ico.value = ico.cat_opt_temp["value_" + lang]
                        }
                        return { ...ico }
                    })]
                } else if (item.category_link.catOption.cat_opt.name == 'STRING') {
                    itemsCO = [...itemsCO.map(ico => {
                        if (ico.co_temp_id == item.co_temp_id) {
                            ico.value = ONP(func)
                            ico.value = ico.value.replace(/_/g, ' ')
                        }
                        return ico
                    })]
                } else {
                    itemsCO = [...itemsCO.map(ico => {
                        if (ico.co_temp_id == item.co_temp_id) {
                            ico.value = Math.round(ONP(func) * 100) / 100;
                        }
                        return ico
                    })]
                }

                coWithFunc = coWithFunc.filter(co => {
                    return co.id != item.id
                })

            }

        })
        //coWithFunc.pop()
    }
    itemsCO = itemsCO.map(i => {
        if (isUuid(i.cat_opt_temp.dim_ref_id)) {
            let coItem = itemsCO.filter(co => co.dim_id == i.cat_opt_temp.dim_ref_id)[0]

            i.value = coItem ? coItem.value : i.value
        }
        return i;
    })

    item.itemCategoryOption = [...itemsCO]
    return item;

}


function LinkItem(item, catOptions, additionalFilter, dimensions, lang) {
    let itemsCO = [...item.itemCategoryOption];
    let coItems = []

    item.itemCategoryOption = itemsCO.map(i => {

        let co = catOptions.filter(co => { return co.category_link[0].id == i.col_id })[0]
        let temp = co.cat_opt_temp.filter(c => { return c.id == i.co_temp_id })[0];
        let element = dimensions.filter(d => { return d.id == i.dim_id })[0];

        return {
            ...i,
            category_link: {
                ...co.category_link[0],
                catOption: co,

            },
            val: i.value,
            cat_opt_temp: temp,
            dim: element && element.name
        };
    }
    )
    return item;

}
function GetValueByDim(dim, itemObj, lang) {
    try {
        let item = itemObj.itemCategoryOption.filter(i => { return i.dim == dim })[0]
        if (!item) {

            return
        }
        return ShowOptionValue(item, itemObj.itemCategoryOption, lang)
    } catch (err) {
        console.log(err);
    }
}
export { BuildItem, GetValueByDim, LinkItem }
