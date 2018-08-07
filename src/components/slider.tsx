import * as React from 'react';
import { Slider, Slide } from 'react-materialize';
// import { Router, browserHistory   } from 'react-router';
const currentWindow = window.location.href;

class SliderWebPart extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            slides: []
        };
    }

    render() {
        return (

            <Slider>
                {
                    this.props.info.map(
                        (elem: any, i: number) =>
                            <Slide
                                key={`sliderItem-${i}`}
                                src={elem['Picture_Link']}
                            >
                                <div className="transparentDiv">
                                    <p className="mainTitle">{elem['Main_Title']}</p>
                                    <p className="text">{elem['Text']}</p>

                                    <a
                                        href={(elem['Read_More_Link'] !== null
                                            && elem['Read_More_Link'].includes('https'))
                                            || elem['Read_More_Link'].includes('mailto') ?
                                            elem['Read_More_Link'] :
                                            `${currentWindow}news/${elem['Main_Title']}`}
                                        target={elem['Read_More_Link'].includes('mailto') ?
                                            '_self' :
                                            '_blank'}
                                    >
                                        <p className="readMoreButton">{elem['Button_Text']}</p>
                                    </a>

                                    <div className="empty">
                                        <br />
                                    </div>
                                </div>
                            </Slide>
                    )
                }
            </Slider>
        );
    }
}

export default SliderWebPart;