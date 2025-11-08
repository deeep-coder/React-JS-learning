import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


// const ReactElement = {  //due to rendering issue this syntax is not valid
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

const reactElement = React.createElement(  // method to create new react element
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement
)

createRoot(document.getElementById('root')).render(

  reactElement
)
