import * as React from 'react';
import SideNav from './navigations/sideNav';
import TopNav from './navigations/topNav';
import MobileNav from './navigations/mobileNav';
import { getLists, getSiteByFileName } from './helperFunctions/requests';
import headerImage from './media/dxc.png';
import Footer from './footer';

const footerClass = document.getElementsByTagName('body')[0].offsetHeight - screen.height < 0 ? 'absolute' : 'relative';

class NewsPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            content: '',
            requests: '',
            loaded: false,
            siteName: '',
        };
    }

    showNav() {
        this.setState({
            visibility: 'block',
        });
    }

    componentWillMount() {
        let that = this;
        Promise.resolve(
            getLists(['Top_Navigation', 'Side_Navigation', 'Pages'])
        ).then(response => {
            let info = response['listItems']['Pages'];
            console.log(info, that.props.match.params.name);
            info = info.filter(
                (e: Object) => e['Title'] === that.props.match.params.name)[0];
            console.log(info['Content']);
            Promise.resolve(getSiteByFileName()).then(siteName => {
                console.log(siteName);
                that.setState({
                    requests: response,
                    loaded: true,
                    content: {
                        '__html': info['Content'],
                    },
                    siteName: siteName
                });
            });

        });
    }

    render() {
        let mobileNav: any = [];
        if (this.state.loaded) {
            mobileNav = [].concat(
                this.state.requests['listItems']['Top_Navigation'],
                this.state.requests['listItems']['Side_Navigation']
            );
        }
        return (
            this.state.loaded ?
                (
                    <div>
                        <div className="header">
                            <img
                                className="headerImage"
                                src={headerImage}
                            />
                        </div>
                        <div className="container newsContent">
                            <div className="row">
                                <p className="siteTitle">{this.state.siteName}</p>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <TopNav
                                        links={this.state.requests['listItems']['Top_Navigation']}
                                        className="topNav"
                                    />
                                    <i className="material-icons button mobile" onClick={() => this.showNav()}>menu</i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 pieChartContainer">
                                    <SideNav
                                        links={this.state.requests['listItems']['Side_Navigation']}
                                        className="sideNav"
                                    />
                                </div>
                                <div className="col s9" dangerouslySetInnerHTML={this.state.content} />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col s12 mobileNav">
                                    <MobileNav
                                        links={mobileNav}
                                        visiblity={this.state.visibility}
                                    />
                                </div>
                            </div>
                        </div>
                        <Footer classType={footerClass} />
                    </div>
                ) :
                (
                    <div className="progress">
                        <div className="indeterminate" />
                    </div>
                )
        );
    }
}

export default NewsPage;