import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore } from 'redux'
import counterReducer from './reducer'

const store = legacy_createStore(counterReducer)

const FeedbackButton = ({buttonType}) => (
  <button onClick={e => store.dispatch({type: buttonType})}>
    {buttonType.toLowerCase()}
  </button>
)

const ResetButton = () => (
  <button onClick={e => store.dispatch({type: 'ZERO'})}>
    reset stats
  </button>
)

const App = () => (
  <div>
    <FeedbackButton buttonType='GOOD' />
    <FeedbackButton buttonType='OK' />
    <FeedbackButton buttonType='BAD' />
    <ResetButton />
    <p>good {store.getState().good}</p>
    <p>ok {store.getState().ok}</p>
    <p>bad {store.getState().bad}</p>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
