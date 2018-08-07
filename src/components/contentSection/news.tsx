import * as React from 'react';
import { getSortedPartOfList } from '../helperFunctions/requests';
import headerImage from '../media/dxc.png';

const mainHeaders = {
    'Accept': 'application/json; odata=verbose',
    'X-RequestDigest': window[`_requestDigest`],
    'content-type': 'application/json;odata=verbose'

};

class News extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            content: [],
            next: '',
            currentWindow: ''
        };
    }

    componentDidMount() {
        this.setState({
            currentWindow: window.location.href
        });
    }

    componentWillMount() {
        console.log(this.props.section);
        let that = this;
        Promise.resolve(getSortedPartOfList(
            'Section', this.props.section, 'Date', 'desc', 6, 'Pages',
            ['Title', 'Thumbnail', 'Date', 'Show_in_News_Section', 'Link']
        )).then(response => {
            console.log(response);
            that.setState({
                content: response.results.filter((
                    e: Object) => e['Show_in_News_Section'] === 'Yes'),
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
                if (response.hasOwnProperty('__next')) {
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
        let that = this;
        console.log(this.state.content);
        return (
            <div >
                <ul className="linkNews">
                    {
                        this.state.content.map((e: Object, i: number) => {

                            return (
                                <li key={i}>
                                    <div className="row" key={i}>
                                        <div className="col s2 thumbnail">
                                            <img
                                                src={e['Thumbnail'] !== null ? e['Thumbnail'] : headerImage}
                                                className="thumbnail"
                                            />
                                        </div>
                                        <div className="col s6">
                                            <span className="title">
                                                <a

                                                    href={e['Link'] !== null ?
                                                        `${e['Link']}` :
                                                        `${that.state.currentWindow}news/${e['Title']}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {e['Title']}
                                                </a>
                                            </span>
                                            <p className="date">
                                                {new Date(e['Date']).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })
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

export default News;