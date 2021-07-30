import { createStore} from 'redux'
import { connect } from 'react-redux'
import NewQuote from './components/NewQuote';
import Quote from './components/Quote';
import ShareQuote from './components/ShareQuote';
import AppWrapper from './components/AppWrapper';

const colors = ["#f4a261", "#264653", "#2a9d8f", "#e9c46a", "#e76f51", "#8ecae6", "#219ebc", "#e63946", "#a8dadc", "#457b9d"]
const defaultState = {
    newQuote: false,
    themeColor: "#8ecae6",   
};
const NEW_QUOTE = 'NEW_QUOTE';
const loadNewQuote = () => {
return {
    type: NEW_QUOTE    
}
};
const newQuoteReducer = (state = defaultState, action) => {
let newState = Object.assign({}, state);
switch (action.type) {
    case NEW_QUOTE:
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        newState.themeColor = colors[randomColorIndex];
        newState.newQuote = !newState.newQuote;
        return newState;
    default:
        return newState;
}
};
  
export const store = createStore(newQuoteReducer);

const mapStateToProps = (state) => {
return {newQuote: state.newQuote, themeColor: state.themeColor}
};
const mapDispatchToProps = (dispatch) => {
return {
    getNewQuote: () => {
    dispatch(loadNewQuote())
    }
}
};

export const NewQuoteContainer = connect(mapStateToProps, mapDispatchToProps)(NewQuote);
export const QuoteContainer = connect(mapStateToProps)(Quote);
export const ShareQuoteContainer = connect(mapStateToProps)(ShareQuote);
export const AppWrapperContainer = connect(mapStateToProps)(AppWrapper);
