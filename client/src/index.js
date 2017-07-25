import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import store from './store'
import startup from './startup'
import './index.css'

const d = document
const rootElement = d.querySelector('#root')

const reactRender = () => {
  ReactDOM.render(
    <App />,
    rootElement
  )
}

reactRender()

store.subscribe((evt) =>
  reactRender()
)

startup()
