import * as React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
// import getNavData from '../helperFunctions/getNavData';
// const currentWindow = window.location.href;

class MobileNav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            links: [],
            visibility: 'hidden',
            updated: false
        };
    }

    hideNav() {
        this.setState({
            visibility: 'hidden'
        });
    }

    componentWillMount() {
        console.log(this.props.links);
    }

    componentWillReceiveProps(nextProps: any) {
        if (!this.state.updated) {
            let links = this.props.links;
            console.log('receiving props', nextProps);
            this.setState({
                visibility: nextProps.visiblity,
                links,
                updated: true
            });
        } else {
            this.setState({
                visibility: nextProps.visiblity,
                updated: true
            });
        }
    }

    render() {
        return (
            <div className={this.state.visibility}>

                {

                    <Collapsible accordion={true}>

                        <div className="collection close">
                            <i className="material-icons button" onClick={() => this.hideNav()}>close</i>
                        </div>
                        {

                            this.state.links.map((link: any, linkNumber: number) => {

                                if (!link.hasOwnProperty('children') && link['Parent'] === null) {
                                    return (
                                        <div className="collection">
                                            <a
                                                className="collection-item"
                                                target="_blank"
                                                href={
                                                    // link['Link'].includes('http') === true ?
                                                    link['Link'] // :
                                                    // `${currentWindow}news/${link['Link']}`
                                                }
                                            >
                                                <div>
                                                    {link['Name']}
                                                </div>
                                            </a>
                                        </div>
                                    );
                                } else if (link.hasOwnProperty('children') && link['Parent'] === null) {
                                    return (
                                        <CollapsibleItem
                                            key={linkNumber}
                                            header={link['Name']}
                                            icon="keyboard_arrow_down"
                                        >
                                            <div className="collection">
                                                {

                                                    link['children'].map((item: Object, itemNumber: number) => {
                                                        return (
                                                            <a
                                                                key={itemNumber}
                                                                target="_blank"
                                                                href={
                                                                    // item['Link'].includes('http') === true ?
                                                                    item['Link'] // :
                                                                    // `${currentWindow}news/${item['Link']}`
                                                                }
                                                                className="collection-item"
                                                            >
                                                                <div>
                                                                    {item['Name']}
                                                                </div>
                                                            </a>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </CollapsibleItem>
                                    );

                                } else {
                                    return;
                                }
                            })
                        }
                    </Collapsible>}
            </div>
        );
    }
}

export default MobileNav;