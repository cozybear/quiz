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
};