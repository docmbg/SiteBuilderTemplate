import * as React from 'react';
import { Tabs, Tab } from 'react-materialize';
import ThumbnailNews from './thumbnailNews';
import LinkNews from './linkNews';
import ExternalLinkNews from './externalLinkNews';

class TabsMenu extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            sections: []
        };
    }
    componentWillMount() {
        let placeHolder = [].concat(this.props.info);
        let dataToUse = {};
        let sections = this.props.info.map((e: Object) => e['Section']);
        let uniqueSections = Array.from(new Set(sections));
        for (let i = 0; i < uniqueSections.length; i++) { // change format to one that's convinient to use

            for (let j = 0; j < placeHolder.length; j++) {

                if (placeHolder[j]['Section'] === uniqueSections[i]) {
                    if (dataToUse.hasOwnProperty(`${uniqueSections[i]}`)) {
                        dataToUse[`${uniqueSections[i]}`]['Info'].push(placeHolder[j]);
                    } else {
                        dataToUse[`${uniqueSections[i]}`] = {
                            'Type': placeHolder[j]['Type'],
                            'Info': [
                                placeHolder[j]
                            ]
                        };
                    }
                }
            }
        }
        this.setState({
            sections: uniqueSections,
            content: dataToUse
        });
    }

    render() {
        let keysInData = Object.keys(this.state.content);
        let content = this.state.content;
        return (
            <div>
                <Tabs>
                    {
                        keysInData.map((section: String, sectionNumber: number) => {
                            switch (content[`${section}`]['Type']) {
                                case 'Thumbnail':
                                    return (
                                        <Tab
                                            className="nounderline"
                                            key={`tabItem-${sectionNumber}`}
                                            active={sectionNumber === 0}
                                            title={section}
                                        >
                                            <ThumbnailNews />
                                        </Tab>
                                    );
                                case 'Link':
                                    return (
                                        <Tab
                                            className="nounderline"
                                            key={`tabItem-${sectionNumber}`}
                                            active={sectionNumber === 0}
                                            title={section}
                                        >
                                            <LinkNews section={content[`${section}`]['Info']} />
                                        </Tab>
                                    );
                                case 'External Link':
                                return (
                                    <Tab
                                        className="nounderline"
                                        key={`tabItem-${sectionNumber}`}
                                        active={sectionNumber === 0}
                                        title={section}
                                    >
                                        <ExternalLinkNews section={content[`${section}`]['Info']} />
                                    </Tab>
                                );
                                default:
                                    return (
                                        <div>{section}</div>
                                    );
                            }
                        })

                    }
                </Tabs>
            </div>
        );

    }
}

export default TabsMenu;