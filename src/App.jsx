import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QuestionPage, Layout, TestMobile, Home, InitiateQuiz, StudentInfo, ResultPage, ProtectedRoute  } from '../src/index'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, Router  } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <Home />
  //       },
  //       {
  //         path: '/mobile',
  //         element: <TestMobile />
  //       },
  //       {
  //         path: '/details',
  //         element: <StudentInfo />
  //       },
  //       {
  //         path: '/startquiz',
  //         element: <InitiateQuiz />
  //       },
  //       {
  //         path: '/quiz',
  //         element: <QuestionPage />
  //       },
  //       {
  //         path: '/result',
  //         element: <ResultPage />
  //       }
  //     ]
  //   }
  // ])

  // return (
  //   <div>
  //     <RouterProvider router={router}/>
  //   </div>
  // )


  return (
   
    <Layout>
      <Routes>
        <Route 
          path='/home'
          element={<Home />}
          />
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/details'
          element={<StudentInfo />}
        />

        <Route 
          path='/startquiz'
          element={
            <ProtectedRoute
            requiredItemKey="StudentDetails"
            redirectPath="/details"
            >
              <InitiateQuiz />
            </ProtectedRoute>
            }
        />
        <Route 
          path='/quiz'
          element= {
            <ProtectedRoute
              requiredItemKey="StudentDetails"
              redirectPath="/details"
            >
              <QuestionPage />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/result'
          element= {
            <ProtectedRoute
              requiredItemKey="QuizCompleted"
              redirectPath="/details"
            >
              <ResultPage />
            </ProtectedRoute>
          }
        />

      </Routes>
      </Layout>
 
  )
  
}

export default App
