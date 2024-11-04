import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {LanguageProvider, TIMEPICKER_V_2_0_2} from "nexcomponent-ui";
import Section from "./Section.jsx";

function App() {

  const [count, setCount] = useState(0)
  return (
    <LanguageProvider defaultLanguage={'id'}>
      <TIMEPICKER_V_2_0_2/>
    </LanguageProvider>
  )
}

export default App
