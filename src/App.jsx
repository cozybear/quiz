import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QuestionPage, Layout, TestMobile, Home, InitiateQuiz, StudentInfo, ResultPage  } from '../src/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/mobile',
          element: <TestMobile />
        },
        {
          path: '/details',
          element: <StudentInfo />
        },
        {
          path: '/startquiz',
          element: <InitiateQuiz />
        },
        {
          path: '/quiz',
          element: <QuestionPage />
        },
        {
          path: '/result',
          element: <ResultPage />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
