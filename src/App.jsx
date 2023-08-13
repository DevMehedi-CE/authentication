import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Singup from './pages/Singup'
import Home from './pages/Home'
import Forget from './components/Forget'

function App() {

  const router = createBrowserRouter([
    {
    path:"/",
    element: <Login/>
  },
  {
    path:"singup",
    element:<Singup/>
  },
  {
   path:"/home",
   element:<Home/>
  },
  {
    path:"/forgetpassword",
    element:<Forget/>

  }
])
  

  return (
   <>
     <RouterProvider  router={router} />
   </>
  )
}

export default App
