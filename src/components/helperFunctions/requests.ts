const mainUrl = window.location.href.split('MainSite')[0];
const mainHeaders = {
    'Accept': 'application/json; odata=verbose',
    'X-RequestDigest': window[`_requestDigest`],
    'content-type': 'application/json;odata=verbose'
};

export async function getLists(lists: Array<string>) {
    let requests = {
        neededLists: lists,
        pollName: '',
        lists: [],
        listItems: {}
    };
    let url = `${mainUrl}/_api/web/lists`;
    await fetch(url, {
        method: 'GET', // or 'PUT'
        credentials: 'include',
        headers: mainHeaders
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            requests.lists = response.d.results;
            requests.pollName = response.d.results.filter((e: Object) => {
                if (e['Title'].includes('Poll:')) {
                    console.log('e  title', e['Title']);
                    requests['neededLists'].push(e['Title']);
                    return e['Title'];
                }
            })[0];
        });
    let promises: any = [];
    for (let list of requests.neededLists) {
        promises.push(getSingleList(list));
    }
    let listItems = await Promise.all(promises);
    let counter = 0;
    for (let list of requests.neededLists) {
        requests.listItems[list] = listItems[counter];
        counter++;
    }
    return requests;
}

async function getSingleList(list: string) {
    let listURL = `${mainUrl}/_api/web/lists/GetByTitle('${list}')/items`;
    let listItems = await fetch(listURL, {
        method: 'GET', // or 'PUT'
        credentials: 'include',
        headers: mainHeaders
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => response.d.results);
    return listItems;
}

export async function postToPollList(listName: string, answer: string, user: string) {
    let updateReqDig = window[`UpdateRequestDigest`];
    Promise.resolve(updateReqDig(mainUrl)).then(res => console.log(res));
    const headers = {
        'Accept': 'application/json; odata=verbose',
        'X-RequestDigest': window[`_requestDigest`],
        'content-type': 'application/json;odata=verbose'
    };
    let url = `${mainUrl}_api/web/lists/GetByTitle('${listName}')/items`;
    return await fetch(url, {
        method: 'POST', // or 'PUT'
        credentials: 'include',
        body: JSON.stringify({ '__metadata': { 'type': 'SP.Data.PollListItem' }, 'Answer': answer, 'UserName': user }),
        headers: headers
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}

export async function getSortedPartOfList(
    filter: string,
    filterValue: string,
    sortingBy: string,
    typeOfSorting: string, // desc, asc
    numberOfItems: number,
    listName: string,
    columns: Array<string>

) {
    let columnsToString = columns.join(',');
    let urlPart0 = `${mainUrl}/_api/web/Lists`;
    let urlPart1 = `/GetByTitle('${listName}')/items?$top=${numberOfItems}&$select=${columnsToString}`;
    let urlPart2 = `&$filter=${filter} eq '${filterValue}'&$orderby=${sortingBy} ${typeOfSorting}`;
    let url = `${urlPart0}${urlPart1}${urlPart2}`;
    return await fetch(url, {
        method: 'GET', // or 'PUT'
        credentials: 'include',
        headers: mainHeaders
    }).then(res => res.json())
        .catch(error => error)
        .then(response => response.d);
}

export async function getListByNameAndColumns(listName: string, columns: Array<string>) {
    let columnsToString = columns.join(',');
    let url = `${mainUrl}/_api/web/Lists/GetByTitle('${listName}')/items?$select=${columnsToString}`;
    return await fetch(url, {
        method: 'GET', // or 'PUT'
        credentials: 'include',
        headers: mainHeaders
    }).then(res => res.json())
        .catch(error => error)
        .then(response => response.d.results);
}

export async function getCurrenUserEmail() {
    let getCurrentUser = `${mainUrl}_api/web/CurrentUser?$select=Email`;
    return await fetch(getCurrentUser, {
        method: 'GET', // or 'PUT'
        credentials: 'include',
        headers: mainHeaders
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => response.d['Email']);
}

export async function getChoicesOfField(listName: string, field: string) {
    let url = `${mainUrl}_api/web/lists/GetByTitle('${listName}')/fields/getbytitle('${field}')`;
    return await fetch(url, {
        method: 'GET', // or 'PUT'
        credentials: 'include',
        headers: mainHeaders
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => response.d.Choices.results);
}

export async function getSiteByFileName() {
    let url = `${mainUrl}/MainSite/SiteName.txt`;
    return await fetch(url, {
        credentials: 'include',
        headers: mainHeaders
    }).then(res => res.text());
}