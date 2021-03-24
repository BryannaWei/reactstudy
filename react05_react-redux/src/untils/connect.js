import React, { PureComponent } from 'react';

import { StoreContext } from './context'

export function connect(mapStateToProps,mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceCpn extends PureComponent {
      constructor(props, context) {
        super(props, context)

        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }
      componentDidMount(){
        this.unSubscribe = this.context.subscribe(()=>{
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }
      componentWillUnmount(){
        this.unSubscribe()
      }
      render(){
        return <WrappedComponent {...this.props}
                                 {...mapStateToProps(this.context.getState())}
                                 {...mapDispatchToProps(this.context.dispatch)} />
      }
    }
    
    EnhanceCpn.contextType = StoreContext;

    return EnhanceCpn;
  }
}