import React, { Component } from "react"
import { findDOMNode } from 'react-dom'

export default ($_ResizeObserver = window.ResizeObserver) =>
    (WrappedComponent) =>
        class onResize extends Component{
            constructor(props){
                super(props);

                this.state = {
                    elemResize: {
                        target: {},
                    }
                };

                this.containerSizeObserver = null;
            }

            componentDidMount(){
                const $_element = findDOMNode(this.refs.WrappedComponent);
                if(!$_element) return;
                this.containerSizeObserver = new $_ResizeObserver(entries => {
                    this.setState({
                        elemResize: entries[0]
                    });
                });
                this.containerSizeObserver.observe($_element);
            }

            componentWillUnmount(){
                this.containerSizeObserver.disconnect();
                this.containerSizeObserver = null;
            }

            render() {

                return (
                    <WrappedComponent
                        elemResize={this.state.elemResize}
                        ref="WrappedComponent"
                        {...this.props}
                    />
                )
            }
        }
