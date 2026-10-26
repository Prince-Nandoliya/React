import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/Mainlayout";
import Student from "./components/Student";
import FormExample from "./components/Addstudent";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Student />,
        },
        {
          path: "/add",
          element: <FormExample />,
        },
        {
          path: "edit/:id",
          element: <FormExample />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
