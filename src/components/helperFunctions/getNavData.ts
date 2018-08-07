function getNavData(data: any) {
    /*  we iterate twice through the array because we need to find a 
        match between the found element and all parent elements;
        */
    let links: any = [];
    links = [].concat(data);
    for (let i = 0; i < links.length; i++) {
        if (links[i]['Parent'] === null) {
            for (let j = 0; j < links.length; j++) {
                if (links[j]['Parent'] === links[i]['Name']) {
                    links[i]['children'] = links[i].hasOwnProperty('children')
                        ? links[i]['children'].concat(links[j]) : [links[j]];
                }
            }
        }
    }
    for (let link of links) { // we sort the children by item order
        if (link.hasOwnProperty('children')) {
            link['children'].sort((a: Object, b: Object) => a['Item_Order'] - b['Item_Order']);
        }
    }
    return (links
        .filter((e: any) => e['Parent'] === null)
        .sort((a: Object, b: Object) => a['Item_Order'] - b['Item_Order']) // we sort the parents by item order
    );

}

export default getNavData;