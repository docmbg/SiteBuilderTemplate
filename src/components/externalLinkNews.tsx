import * as React from 'react';

class ExternalLinkNews extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            content: []
        };
    }

    render() {
        return (
            <ul className="linkNews">
                {
                    this.props.section.map((e: Object, i: number) =>

                        <li key={i}>
                            <span className="title">
                                <a
                                    href={`${e['Content']}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {e['Title']}
                                </a>
                            </span> &nbsp;-&nbsp;
                            <span>{e['Date']}</span>
                        </li>

                    )
                }
            </ul>
        );

    }
}

export default ExternalLinkNews;