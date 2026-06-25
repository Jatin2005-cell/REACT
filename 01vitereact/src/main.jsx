import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
     return(
        <div>
            <h1>My App !</h1>
        </div>
     )
}
const Otheruser = "hvhkjnk"
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        targetnew: '_blank',
    },

    children: 'click me to visit google',
    Otheruser
}
  const anotherReactElement = ( 
    <a href='https://www.google.com' target='_blank'>click me to visit google</a>
  )

  c
  const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'click me to visit google'
    

  )

  
createRoot(document.getElementById('root')).render(
  <StrictMode>
   ReactElement
  </StrictMode>,
)
