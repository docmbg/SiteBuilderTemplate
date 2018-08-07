import * as React from 'react';

class Footer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={`footerDXC row ${this.props.classType}`}>
                <div className="col s12 m4">
                    <p className="followus"> Follow us </p>
                    <div className="badgeCointaner">
                        <a href="https://www.facebook.com/DXCTechnology/" target="_blank" rel="noopener noreferrer">
                            <div className="badge fb">
                                <div className="iconContainer"><i className="fab fa-2x fa-facebook-square" /></div>
                            </div>
                        </a>
                        <a href="https://twitter.com/DXCTechnology" target="_blank" rel="noopener noreferrer">
                            <div className="badge tw">
                                <div className="iconContainer"><i className="fab fa-2x fa-twitter-square" /></div>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/user/csc" target="_blank" rel="noopener noreferrer">
                            <div className="badge yt">
                                <div className="iconContainer"><i className="fab fa-2x fa-youtube-square" /></div>
                            </div>
                        </a>
                    </div>

                </div>
                <div className="col s12 m4">
                    <p className="largeDXC">
                        <a
                            className="footerLinks"
                            href="https://www.dxc.technology/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            DXC Technology
                        </a>
                    </p>
                </div>
                <div className="col s12 m4">
                    <p> Contact us </p>
                    <p><a className="footerLinks" href="mailto:abc.service.line@dxc.com">ABC Service Line</a></p>
                    <p>
                        <a
                            className="footerLinks"
                            href="https://hpe.sharepoint.com/teams/ABC-TInA/Catalogue/index.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            powered by ABC TInA
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;