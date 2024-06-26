import { createContext } from 'react'

const currentUser = {
  id: 1,
  name: 'John Doe',
  profilePic: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'
}

export const AuthContext = createContext({ currentUser })

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {  

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
