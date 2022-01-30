import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AppBar from './components/AppBar';
import Carousel from "./components/Carousal/index.tsx";
import NewsComponent from './components/NewsComponent';
import EventComponent from './components/EventComponent';
import AboutAASTU from './components/AboutAASTU';
import Academics from './components/Academics';
import Admission from './components/Admission';
import Research from './components/Research';
import UniversityLife from './components/UniversityLife';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import 'animate.css';
import './App.css';

export default function App(){
    return (<Router>
        <AppBar/>
        <Routes>
            <Route exact path='/' element={<><Carousel/><NewsComponent/><EventComponent/><AboutAASTU/><Academics/><Admission/><Research/><UniversityLife/></>}/>
        <Route path='/signin' element={<SignIn/>}/>
        </Routes>
        <Footer/>
    </Router>);
}