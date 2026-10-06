import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import MainLayout from './routes/MainLayout'
import Pagenot from './ui/Pagenot'
import Student from './components/Student'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      errorElement:<Pagenot/>,
      children:[
        {
          index:true,
          element:<Student/>
        }
      ]
    }
  ])

  return<RouterProvider router={router}/>
}

export default App
