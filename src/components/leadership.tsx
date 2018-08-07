import * as React from 'react';
const currentWindow = window.location.href;

class LeadershipCorner extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            leadership: {}
        };
    }
    render() {
        let leadership = this.props.info[0];
        return (
            <div >
                <img className="leaderShipImage" src={leadership['Image']} />
                <p className="leaderShipTitle">{leadership['Name']}</p>
                <p className="leaderShipText">{leadership['Title']}</p>
                <p className="leaderShipText">
                    <a
                        href={`mailto:${leadership['Email']}`}
                    >Email
                    </a> |
                    <a
                        href={
                            leadership['Bio'] !== null && leadership['Bio'].includes('https') ?
                                leadership['Bio'] :
                                `${currentWindow}news/${leadership['Bio']}`
                        }
                        target="_blank"
                    >
                        Bio
                    </a>
                </p>
            </div>
        );
    }

}

export default LeadershipCorner;