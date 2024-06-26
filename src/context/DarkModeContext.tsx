import { createContext, useEffect, useState } from 'react'

interface IContext {
  darkMode: boolean
  toggle: () => void
}

export const DarkModeContext = createContext({} as IContext)

export const DarkModeContextProvider = ({children}: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(JSON.parse(localStorage.getItem("darkMode") as string))

  const toggle = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  )
}


// import { createContext, useEffect, useState } from 'react'

// export const DarkModeContext = createContext({})

// export const DarkModeContextProvider = ({children}: { children: React.ReactNode }) => {
//   const [darkMode, setDarkMode] = useState<boolean>(!!JSON.parse(localStorage.getItem("darkMode") as string))

//   const toggle = () => {
//     setDarkMode(!darkMode)
//   }

//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode)
//   }, [darkMode])

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggle }}>
//       {children}
//     </DarkModeContext.Provider>
//   )
// }


// export const DarkModeContextProvider = ({children}: { children: React.ReactNode }) => {
//   const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode") as string) || null)

//   const toggle = () => {
//     setDarkMode(!darkMode)
//   }

//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode)
//   }, [darkMode])

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggle }}>
//       {children}
//     </DarkModeContext.Provider>
//   )
// }