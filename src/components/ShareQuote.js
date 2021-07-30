import React, { Component } from 'react'

export class ShareQuote extends Component {
    constructor(props) {
        super(props); 
        this.getShareURL = this.getShareURL.bind(this);       
    }    

    getShareURL() {
        let shareElement = document.getElementById(this.props.id);
        let textElement = document.getElementById("text");
        let authorElement = document.getElementById("author");
        let currentAuthor = "";
        let currentQuote = "";
        if (textElement != null && authorElement != null) {            
            currentAuthor = authorElement.innerText;            
            currentQuote = textElement.innerText;
        }
        if (shareElement != null) {
            if (this.props.id === "tweet-quote") {
                shareElement.href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
            } else {
                shareElement.href = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
                encodeURIComponent(currentAuthor) +
                '&content=' +
                encodeURIComponent(currentQuote) +
                '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
            }
            
        }
    }
    render() {
        
        return (            
            <div onClick={this.getShareURL}>
                <a id={this.props.id} href={this.props.shareLink} target="_blank" rel="noreferrer"><i style={{color: this.props.themeColor, margin: "0px 2px"}} className={this.props.icon}></i></a>
            </div>
        )
    }
}

export default ShareQuote
