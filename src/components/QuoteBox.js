import React, { Component } from 'react'
import {ShareQuoteContainer, NewQuoteContainer, QuoteContainer } from '../store'


export class QuoteBox extends Component {
    
    render() { 
        return (
            <div>
                <div className="card" style={{width: 500}}>
                    <QuoteContainer/>
                    <div className="buttons">
                        <ShareQuoteContainer id="tweet-quote" icon="fab fa-twitter-square fa-3x" shareLink={"https://twitter.com/intent/tweet"}
  />
                        <ShareQuoteContainer id="tumblr-quote" icon="fab fab fa-tumblr-square fa-3x" shareLink="http://tumblr.com/share"/>                        
                        <NewQuoteContainer />
                        
                    </div>
                    
                </div>
                <p className="designer">by hezag</p>
            </div>
        )
    }
}


export default QuoteBox


