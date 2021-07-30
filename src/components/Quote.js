import React, { Component } from 'react'


export class Quote extends Component {
    constructor(props) {
        super(props);       
        this.state = {
            error: null,
            isLoaded: false,
            quotes: []
        } 
    }
    componentDidMount() {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(
            (result) => {
              console.log('data', result);
              this.setState({  
                isLoaded: true,              
                quotes: result
              });
              
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({  
                isLoaded: true,              
                error
              });
            }
          );
       
        
    }
   
    
    render() {
        const { error, isLoaded,  quotes} = this.state;
        console.log("quote", this.props.newQuote)
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div><i className="fas fa-quote-left fa-xs"></i></div>;
        } else {
            let randomInt = Math.floor(Math.random() * this.state.quotes.length);            
            let quoteAuthor = quotes[randomInt].author
            let quoteText = quotes[randomInt].text
            
            if (quoteText == null || quoteText.length === 0) {
                quoteText = "Genius is one percent inspiration and ninety-nine percent perspiration.";
                quoteAuthor = "Thomas Edison";
            } else if (quoteAuthor == null || quoteText.length === 0) {
                quoteAuthor = "Unknown";
            }                
            
            return (
                <div>
                    <h1 className="text-center" style={{color: this.props.themeColor}} id="text"> <i className="fas fa-quote-left fa-xs"></i> {quoteText}</h1>
                    <p className="text-right" style={{color: this.props.themeColor}} id="author">- {quoteAuthor}</p>
                    
                </div>
            )
        }
        
    }
}

export default Quote
