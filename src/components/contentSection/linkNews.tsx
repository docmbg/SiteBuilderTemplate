import * as React from 'react';
import { getSortedPartOfList } from '../helperFunctions/requests';

const currentWindow = window.location.href;
const mainHeaders = {
    'Accept': 'application/json; odata=verbose',
    'X-RequestDigest': window[`_requestDigest`],
    'content-type': 'application/json;odata=verbose'

};

class LinkNews extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            content: [],
            next: '',
        };
    }

    componentWillMount() {
        let that = this;
        Promise.resolve(getSortedPartOfList(
            'Type_of_Content', 'Link', 'Date', 'desc', 10, 'Pages',
            ['Title', 'Type_of_Content', 'Date', 'Show_in_News_Section']
        )).then(response => {
            console.log(response);
            that.setState({
                content: response.results.filter((e: Object) => e['Show_in_News_Section'] === 'Yes'),
                next: response[`__next`] || ''
            });
        });
    }

    showMore() {
        let that = this;
        fetch(this.state.next, {
            method: 'GET', // or 'PUT'
            credentials: 'include',
            headers: mainHeaders
        }).then(res => res.json())
            .catch(error => error)
            .then(response => {
                let next = '';
                if (response.d.hasOwnProperty('__next')) {
                    next = response.d[`__next`];
                }
                that.setState({
                    next,
                    content: that.state.content.concat(response.d.results.filter(
                        (e: Object) => e['Show_in_News_Section'] === 'Yes')),
                });
            });
    }

    render() {
        return (
            <div>
                <ul className="linkNews">
                    {
                        this.state.content.map((e: Object, i: number) =>

                            <li key={i}>
                                <span className="title">
                                    <a
                                        href={`${currentWindow}news/${e['Title']}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {e['Title']}
                                    </a>
                                </span> &nbsp;-&nbsp;
                                <span> {new Date(e['Date']).toLocaleDateString()}</span>
                            </li>

                        )
                    }
                </ul>
                <button
                    onClick={() => this.showMore()}
                    className={this.state.next === '' ? 'hidden' : 'block'}
                >
                    Show More
                </button>
            </div>
        );

    }
}

export default LinkNews;