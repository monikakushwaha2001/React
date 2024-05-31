import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return (
    <div>
      <h1>Custom App !1</h1>
    </div>
  )
}
// const ReactElement = {
//   type: 'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   Children:'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https:google.com', target:'_blank'},
  'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
)
