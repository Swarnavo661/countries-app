import { useTheme } from '../hooks/Theme'

export default function Header() {
  const [DarkMode, setDarkMode] = useTheme()

  const handleChange = () => 
  {
    setDarkMode(!DarkMode)
    document.body.classList.toggle('darkMode')
  }
  return (
    <header>
      <a href="#" onClick={(e) => history.back()}>Where is the world?</a>
      <div className="themeChanger" onClick={handleChange}>
        {DarkMode? 
        <>
            <box-icon name='sun'></box-icon>&nbsp;DarkMode
        </>
        :
        <>
            <box-icon name='moon'></box-icon>&nbsp;LightMode
        </>
        }
      </div>
    </header>
  )
}
