import React, { Component } from "react";
import { findDOMNode } from 'react-dom';

export default (ResizeObserverPolyfill) =>
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

                const ResizeObserver = window.ResizeObserver || ResizeObserverPolyfill;

                if(!ResizeObserver) {
                    throw new Error("You may need a polyfill to handle this component.");
                    return;
                }

                this.containerSizeObserver = new ResizeObserver(entries => {
                    this.setState({
                        elemResize: entries[0]
                    });
                });

                this.containerSizeObserver.observe($_element);
            }

            componentWillUnmount(){
                if(this.containerSizeObserver) this.containerSizeObserver.disconnect();
                this.containerSizeObserver = null;
            }

            render() {

                return (
                    <WrappedComponent 
                        {...this.props}
                        elemResize={this.state.elemResize}
                        ref="WrappedComponent"
                    />
                )
            }
        }