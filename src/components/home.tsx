import * as React from 'react';
import '../sass/App.css';
// import { Link } from 'react-router-dom';
import SliderWebPart from './slider';
import LeadershipCorner from './leadership';
import SideNav from './navigations/sideNav';
import TopNav from './navigations/topNav';
import MobileNav from './navigations/mobileNav';
import TabsMenu from './contentSection/tabsMenu';
import Poll from './poll';
import { getLists, getSiteByFileName } from './helperFunctions/requests';
import headerImage from './media/dxc.png';
import Footer from './footer';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      requests: {},
      loaded: false,
      mobileNavVisible: {},
      siteName: ''
    };
  }

  showNav() {
    this.setState({
      mobileNavVisible: 'block',
    });
  }

  componentDidMount() {
    let that = this;
    Promise.resolve(
      getLists(['Slider', 'Leadership_Corner', 'Top_Navigation', 'Side_Navigation', 'MainSite_Visibility'])
    ).then(response => {
      let visibility = {};
      let mainsiteVisibility = response.listItems[`MainSite_Visibility`];
      for (let item of mainsiteVisibility) {
        visibility[item[`Title`]] = item['Visible'];
      }
      Promise.resolve(getSiteByFileName()).then(siteName => {
        console.log(siteName);
        that.setState({
          requests: response,
          loaded: true,
          visibility,
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

            <div className="container">
              <div className="row">
                <p className="siteTitle">{this.state.siteName}</p>
              </div>
              <div className={`row ${this.state.visibility['Top_Navigation']}`}>
                {
                  this.state.requests.listItems['Top_Navigation'].length !== 0 ?
                    <TopNav
                      links={[].concat(this.state.requests['listItems']['Top_Navigation'])}
                      className="topNav"
                    /> :
                    <div />
                }

                <i className="material-icons button mobile" onClick={() => this.showNav()}>menu</i>
              </div>
              <div className="row">
                <div className={`col s12 m8 ${this.state.visibility['Slider']}`}>
                  {
                    this.state.requests.listItems['Slider'].length !== 0 ?
                      <SliderWebPart
                        info={this.state.requests['listItems']['Slider']}
                      /> :
                      <div />
                  }
                </div>
                <div className={`col s12 m4 ${this.state.visibility['Leadership_Corner']}`}>
                  {
                    this.state.requests.listItems['Leadership_Corner'].length !== 0 ?
                      <LeadershipCorner
                        info={this.state.requests['listItems']['Leadership_Corner']}
                      /> :
                      <div />
                  }
                </div>
              </div>
              <div className="row">
                <div className="col s3 pieChartContainer">
                  <div className={`${this.state.visibility['Side_Navigation']}`}>
                    {
                      this.state.requests.listItems['Side_Navigation'].length !== 0 ?
                        <SideNav
                          links={[].concat(this.state.requests['listItems']['Side_Navigation'])}
                          className="sideNav"
                        /> :
                        <div />
                    }
                  </div>
                  <div className={`col s12 m12 pieChart ${this.state.visibility['Poll']}`}>
                    {
                      this.state.visibility['Poll'] === 'hidden' ?
                        <div /> :
                        <Poll
                          title={this.state.requests['pollName']['Title']}
                          // get the info for the list which contains 'Poll' in its name, because we don't know 
                          // its exact name
                          info={this.state.requests.listItems[`Poll: ${this.state.requests['pollName']}`]}
                        />
                    }

                  </div>

                </div>
                <div className={`col s9 ${this.state.visibility['News_Section']}`}>
                  <TabsMenu />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col s12 mobileNav">
                  <MobileNav
                    links={[].concat(mobileNav)}
                    visibility={this.state.mobileNavVisible}
                  />
                </div>
              </div>
            </div>
            <Footer classType="relative" />
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

export default Home;
