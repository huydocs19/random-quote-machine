import React, { Component } from 'react'
import QuoteBox from './QuoteBox';

export class AppWrapper extends Component {
    
    render() { 
        return (
            <div style={{background: this.props.themeColor}} className="container-fluid">
                <QuoteBox id="quote-box"/>
            </div>
            )
    }
}


export default AppWrapper