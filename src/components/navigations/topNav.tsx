import * as React from 'react';
import getNavData from '../helperFunctions/getNavData';
const currentWindow = window.location.href;

class TopNav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            links: '',
        };
    }

    componentWillMount() {
        let links: any = [];
        links = [].concat(getNavData(this.props.links));
        console.log(links);
        this.setState({
            links
        });
    }

    render() {
        console.log(this.state.links);
        return (
            <ul className="linkCollection topNav">
                {
                    this.state.links.map((e: any, i: number) => {
                        if (!e.hasOwnProperty('children')) {
                            return (
                                <li key={`topNavItem-${i} top`} className="topNavItem top">
                                    <a
                                        className="sideNavLink nounderline"
                                        target="_blank"
                                        href={
                                            e['Link'] !== null && e['Link'].includes('http') === true ?
                                                e['Link'] :
                                                `${currentWindow}news/${e['Link']}`
                                        }
                                    >
                                        <div>
                                            {e['Name']}
                                        </div>
                                    </a>
                                </li>
                            );
                        } else {
                            return (

                                <li key={`topNavItem-${i}`} className="topNavItem parent top">
                                    <div >
                                        {e['Name']}<i className="material-icons arrows">&#xE313;</i>
                                    </div>
                                    <ul className="topNavNested z-depth-2">
                                        {
                                            e['children'].map((child: any, index: number) =>
                                                <li key={`topNavItem-${index}`} className="topNavItem">
                                                    <a
                                                        className="sideNavLink nounderline"
                                                        target="_blank"
                                                        href={
                                                            child['Link'] !== null &&
                                                                child['Link'].includes('http') === true ?
                                                                child['Link'] :
                                                                `${currentWindow}news/${child['Link']}`
                                                        }
                                                    >
                                                        <div className="topNavPad">
                                                            {child['Name']}
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </li>
                            );
                        }
                    })
                }
            </ul>
        );
    }
}

export default TopNav;