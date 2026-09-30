import React ,{children} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './routes/MainLayout'
import Home from './components/Home'
import About from './components/About'

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"About",
          element:<About/>
        }
        
        
      ]
    }
  ])


  return <RouterProvider router={router}/>
   
}

export default App
