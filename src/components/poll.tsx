import * as React from 'react';
import PieChart from 'react-simple-pie-chart';
import { Input } from 'react-materialize';
import {
    postToPollList,
    getListByNameAndColumns,
    getCurrenUserEmail,
    getSortedPartOfList,
    getChoicesOfField
} from './helperFunctions/requests';

class Poll extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            authenticated: false,
            slices: [],
        };
    }

    componentWillMount() {
        let that = this;
        Promise.resolve(
            getCurrenUserEmail()
        ).then(res => {
            console.log(res);
            async function getAuth() {
                return getSortedPartOfList(
                    'UserName', res, 'Title', 'desc', 1, that.props.title, ['Title']
                );
            }
            return Promise.resolve(getAuth()).then(userRes => {
                console.log(userRes);
                if (userRes.results.length === 0) {
                    console.log('setting to true');
                    that.setState({
                        authenticated: false,
                        currentUser: res,
                    });
                } else {
                    console.log('setting to false');
                    that.setState({
                        authenticated: true,
                        currentUser: res,
                    });
                }
            });
        });
        let slices: any = [];
        Promise.resolve(
            getChoicesOfField(that.props.title, 'Answer')
        ).then(resSices => {
            for (let answer of resSices) {
                slices.push({
                    value: 0,
                    answer: answer
                });
            }
            Promise.resolve(
                getChoicesOfField(that.props.title, 'Colors')
            ).then(colors => {
                let counter = 0;
                for (let color of colors) {
                    slices[counter]['color'] = color;
                    counter++;
                }
                Promise.resolve(
                    getListByNameAndColumns(that.props.title, ['Answer'])
                ).then(response => {
                    // count the votes;
                    console.log(slices, response);
                    for (let entry of response) {
                        for (let slice of slices) {
                            if (slice['answer'] === entry['Answer']) {
                                slice['value']++;
                            }
                        }
                    }
                    that.setState({
                        slices
                    });
                });
            });

        });
    }

    onRadioChange(e: string) {
        let that = this;
        let slices = this.state.slices;
        for (let slice of slices) {
            slice['value'] = 0;
        }
        Promise.resolve(postToPollList(that.props.title, e, this.state.currentUser)).then(response => {
            Promise.resolve(
                getListByNameAndColumns(that.props.title, ['Answer'])
            ).then(res => {
                // count the votes;
                for (let entry of res) {
                    for (let slice of slices) {
                        if (slice['answer'] === entry['Answer']) {
                            slice['value']++;
                        }
                    }
                }
                that.setState({
                    slices,
                    authenticated: true
                });
            });
        });
    }

    render() {
        let that = this;
        console.log(this.props.title, this.state.slices);
        return (
            <div>
                <p>{`${this.props.title}?`}</p>
                <PieChart
                    slices={this.state.slices}
                />
                {this.state.authenticated ?
                    this.state.slices.map((slice: Object, sliceNumber: number) => {

                        let style = { 'background': slice['color'] };
                        return (
                            <div key={sliceNumber}>
                                <div className="legend" style={style} />
                                <span>{`${slice['answer']} (${slice['value']})`}
                                </span>
                            </div>
                        );
                    }
                    )
                    :
                    <div>
                        {this.state.slices.map((slice: Object, sliceNumber: number) => {
                            return (

                                <Input
                                    key={sliceNumber}
                                    name="group1"
                                    type="radio"
                                    value={slice[`answer`]}
                                    label={slice[`answer`]}
                                    onChange={() => that.onRadioChange(slice[`answer`])}
                                />

                            );
                        })
                        }
                    </div>

                }
            </div>
        );
    }

}

export default Poll;