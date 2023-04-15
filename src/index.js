import React from 'react'
// import ReactDOM from 'react-dom'
import App from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    
)
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
