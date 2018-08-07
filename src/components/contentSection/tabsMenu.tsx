import * as React from 'react';
import { Tabs, Tab } from 'react-materialize';
import News from './news';
import { getChoicesOfField } from '../helperFunctions/requests';

class TabsMenu extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            sections: [],
            loaded: false,
        };
    }
    componentWillMount() {
        Promise.resolve(
            getChoicesOfField('Pages', 'Section')
        ).then(sections => {
            this.setState({
                loaded: true,
                sections
            });

        });
    }

    render() {
        let sections = this.state.sections;
        return (
            this.state.loaded ?
                (
                    <div >
                        <Tabs>
                            {
                                sections.map((section: String, sectionNumber: number) => {
                                    return (
                                        <Tab
                                            className="nounderline"
                                            key={`tabItem-${sectionNumber}`}
                                            active={sectionNumber === 0}
                                            title={section}
                                        >
                                            <News section={section} />
                                        </Tab>
                                    );

                                })

                            }
                        </Tabs>
                    </div>
                ) :
                <div />

        );
    }
}

export default TabsMenu;