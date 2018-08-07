import * as React from 'react';
import getNavData from '../helperFunctions/getNavData';
const currentWindow = window.location.href;

class SideNav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            links: '',
        };
    }

    componentWillMount() {
        console.log(this.props.links);
        let links: any = [];
        links = [].concat(getNavData(this.props.links));
        console.log(links);
        this.setState({
            links
        });
    }

    render() {
        return (
            <ul className="linkCollection">
                {
                    this.state.links.map((e: any, i: number) => {
                        if (!e.hasOwnProperty('children')) {
                            return (
                                <li key={`sideNavItem-${i}`} className="sideNavItem sideNav">
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

                                <li key={`sideNavItem-${i}`} className="sideNavItem parent sideNav">
                                    <div>
                                        {e['Name']}<i className="material-icons arrows">&#xE315;</i>
                                    </div>
                                    <ul className="sideNavNested z-depth-2">
                                        {
                                            e['children'].map((child: any, index: number) =>
                                                <li key={`sideNavItem-${index}`} className="sideNavItem sideNav">
                                                    <a
                                                        className="sideNavLink nounderline"
                                                        target="_blank"
                                                        href={
                                                            child['Link'] !== null
                                                                && child['Link'].includes('http') === true ?
                                                                child['Link'] :
                                                                `${currentWindow}news/${child['Link']}`
                                                        }
                                                    >
                                                        <div>
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

export default SideNav;