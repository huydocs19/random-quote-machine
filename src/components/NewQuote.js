import React, { Component } from 'react'



export class NewQuote extends Component {
    constructor(props) {
        super(props);       
        this.requestNewQuote = this.requestNewQuote.bind(this) 
    }

    requestNewQuote(){        
        this.props.getNewQuote();
    }
    render() {
        return (
            <button id="new-quote" style={{background: this.props.themeColor}} onClick={this.requestNewQuote} className="btn">New Quote</button>       
        )
    }
}


export default NewQuote
