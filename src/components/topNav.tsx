import * as React from 'react';
import data from './mockedData';

class TopNav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            links: []
        };
    }
    componentWillMount() {
        /*  we iterate twice through the array because we need to find a 
        match between the found element and all parent elements;
        */
        let links: any = [].concat(data.getTopNav());
        for (let link of links) {
            if (link['Parent'] !== '') {
                for (let ph of links) { // we iterate again to find a match
                    if (ph['Name'] === link['Parent']) {
                        ph['children'] = ph.hasOwnProperty('children') ? ph['children'].concat(link) : [link];
                    }
                }
            }
        }
        for (let link of links) { // we sort the children by item order
            if (link.hasOwnProperty('children')) {
                link['children'].sort((a: Object, b: Object) => a['Item_Order'] - b['Item_Order']);
            }
        }
        this.setState({
            links: links
                .filter((e: any) => e['Parent'] === '')
                .sort((a: Object, b: Object) => a['Item_Order'] - b['Item_Order']) // we sort the parents by item order
        });
    }

    render() {
        let that = this;
        return (
            <ul className="linkCollection top">
                {
                    that.state.links.map((e: any, i: number) => {
                        if (!e.hasOwnProperty('children')) {
                            return (
                                <li key={`sideNavItem-${i} top`} className="sideNavItem top">
                                    <a
                                        className="sideNavLink nounderline"
                                        target="_blank"
                                        href={e['Link']}
                                    >
                                        <div>
                                            {e['Name']}
                                        </div>
                                    </a>
                                </li>
                            );
                        } else {
                            return (

                                <li key={`sideNavItem-${i}`} className="sideNavItem parent top">
                                    <div >
                                        {e['Name']}<i className="material-icons arrows">&#xE313;</i>
                                    </div>
                                    <ul className="topNavNested z-depth-2">
                                        {
                                            e['children'].map((child: any, index: number) =>
                                                <li key={`sideNavItem-${index}`} className="sideNavItem">
                                                    <a
                                                        className="sideNavLink nounderline"
                                                        target="_blank"
                                                        href={child['Link']}
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