import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { 
  QuestionPage, 
  Layout, 
  TestMobile,
  Home, 
  InitiateQuiz, 
  StudentInfo, 
  ResultPage, 
  ProtectedRoute, 
  SignInPage, 
  UserRegisterPage, 
  UpdatedQuestionPage,
  Test,  
} from '../src/index'
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
        {/* <Route 
          path='/details'
          element={<StudentInfo />}
        /> */}
        <Route 
          path='/signin'
          element={<SignInPage />}
        />
        <Route 
          path='/register'
          element={<UserRegisterPage />}
        />

        <Route 
          path='/startquiz'
          element={
            <ProtectedRoute
            requiredItemKey="CurrentUser"
            redirectPath="/signin"
            >
              <InitiateQuiz />
            </ProtectedRoute>
            }
        />
        {/* <Route 
          path='/quiz'
          element= {
            <ProtectedRoute
              requiredItemKey="CurrentUser"
              redirectPath="/signin"
            >
              <QuestionPage />
            </ProtectedRoute>
          }
        /> */}
        <Route 
          path='/quiz'
          element= {
            <ProtectedRoute
              requiredItemKey="CurrentUser"
              redirectPath="/signin"
            >
              <UpdatedQuestionPage />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/result'
          element= {
            <ProtectedRoute
              requiredItemKey="QuizCompleted"
              redirectPath="/signin"
            >
              <ResultPage />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/test'
          element= {
              <Test />
          }
        />

      </Routes>
      </Layout>
 
  )
  
}

export default App
