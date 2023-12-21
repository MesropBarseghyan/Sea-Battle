import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.style.scss"
import { Provider } from 'react-redux'
import {store} from "./store/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
        <App />
     </Provider>
)
