import "babel-polyfill";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import ElementResize from 'react-element-onresize';
import resizeObserver from "resize-observer-polyfill";
import "./index.scss";


@ElementResize(resizeObserver)
class Card extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true
        }
    }

    static propTypes = {
        elemResize: PropTypes.object,
        delay: PropTypes.number,
        count: PropTypes.number
    };

    componentDidMount(){
        const { delay } = this.props;

        this.timer = setTimeout(() => {
            this.setState({
                loading: false
            });
            this.timer = null;
        }, delay);
    }

    componentWillUnmount(){
        if(this.timer) clearTimeout(this.timer);
    }

    render() {
        const { elemResize, count } = this.props;
        const { loading } = this.state;

        return (
            <div styleName="card">
                {
                    (count > 0) &&
                    (
                        <div styleName="index">{count}</div>
                    )
                }
                <p styleName="size">width: {(elemResize.contentRect)? Math.floor(elemResize.contentRect.width) : 0} px</p>
                <p styleName="size">height: {(elemResize.contentRect)? Math.floor(elemResize.contentRect.height) : 0} px</p>
                {
                    (loading)? 
                        (
                            <p styleName="loading">picture loading...</p>
                        )
                        :
                        (
                            <div styleName="picture">a fake picture</div>
                        )
                }
            </div>
        )
    }
}

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            multiCount: 10,
            delay: 2000
        }
    }

    cardRender(){
        const { multiCount, delay } = this.state;

        let cards = [];

        for(let i = 0; i < multiCount; i++){
            cards.push(
                <Card
                    key={i}
                    delay={delay}
                    count={i + 1}
                />
            )
        }

        return cards
    }

    render() {
        const { multiCount, delay } = this.state;

        return (
            <div>
                <div styleName="resize-options">
                    <span>
                        cards count:
                        <input
                            type="number"
                            value={multiCount}
                            onChange={(e) => {
                                let multiCount = Math.floor(e.target.value);
                                this.setState({
                                    multiCount: (multiCount > 100)? 100 : multiCount
                                })
                            }}
                        />
                    </span>
                    <span>
                        pictures loading delay(ms):
                        <input
                            type="number"
                            value={delay}
                            onChange={(e) => {
                                this.setState({
                                    delay: Number(e.target.value)
                                })
                            }}
                        />
                    </span>
                </div>
                <div styleName="resize-wapper">
                    {
                        this.cardRender()
                    }
                </div>
            </div>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('app'));
