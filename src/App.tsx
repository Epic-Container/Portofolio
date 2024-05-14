import Navbar from './Components/navbar'
import React,{useState} from 'react'
const App:React.FC = () => {
  let [theme, setTheme] = useState(false)
  function themeHandler () {
    setTheme(!theme)
  }
  const themeProps = {
    true: "",
    false: ""
  }
  
  return (
    <main className='min-h-screen p-2 bg-[#1E1E1E] text-white'>
      <Navbar mode={"hello"} text="Light"/>
    </main>
  )
}

export default App;