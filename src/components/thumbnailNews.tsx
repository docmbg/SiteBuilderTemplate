import * as React from 'react';

const currentWindow = window.location.href;

class ThumbnailNews extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            content: []
        };
    }

    render() {
        return (
            <div className="thumbnailContainer">
                {
                    this.props.section.map((e: Object, i: number) =>
                        <div className="row" key={i}>
                            <div className="col s2">
                                <img src={e['Thumbnail']} className="thumbnail"/>
                            </div>
                            <div className="col s6">
                                <span className="title">
                                    <a 
                                        href={`${currentWindow}/${e['Title']}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {e['Title']}
                                    </a>
                                </span>
                                <p className="date">
                                        {e['Date']}
                                </p>
                            </div>
                        </div>
                    )
                }

            </div>
        );

    }
}

export default ThumbnailNews;