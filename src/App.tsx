import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'
import Profile from './pages/profile/Profile'
import Protected from './components/Protected'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected>
          <Layout />
        </Protected>
      ),
      children: [
        {
          path: "/",
          element: <Home />      
        },
        {
          path: "/profile/:id",
          element: <Profile />      
        }
      ]
    },
    {
      path: "/login",
      element: <Login />      
    },
    {
      path: "/register",
      element: <Register />      
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
