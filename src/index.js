import Question from '../src/components/Question';
import QuestionPage from '../src/pages/QuestionPage';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer'
import Layout from './components/Layout';
import dbService from '../src/appwrite/dbconfig';
import authService from '../src/appwrite/auth';
import TestMobile from '../src/pages/TestMobile';
import Home from '../src/pages/Home';
import InitiateQuiz from '../src/pages/InitiateQuiz';
import Button from './components/Button';
import InputBox from './components/InputBox';
import StudentInfo from '../src/pages/StudentInfo';
import QuestionComponent from '../src/components/QuestionComponent';
import Result from '../src/components/Result';
import ResultPage from '../src/pages/ResultPage';
import Shuffle from './hooks/Shuffle';
import ProtectedRoute from '../src/components/ProtectedRoute';
import SignInPage from './pages/SignInPage';
import SignIn from './components/SignIn';
import UserRegisterPage from './pages/UserRegisterPage';
import UserRegister from './components/UserRegister.jsx';
export {
    Question,
    QuestionPage,
    Header,
    Footer, 
    Layout,
    dbService,
    TestMobile,
    Home,
    InitiateQuiz,
    Button,
    InputBox,
    StudentInfo,
    authService,
    QuestionComponent,
    Result,
    ResultPage,
    Shuffle,
    ProtectedRoute,
    SignInPage,
    SignIn,
    UserRegisterPage,
    UserRegister
};