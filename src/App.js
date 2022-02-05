import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AppBar from './components/AppBar';
import Carousel from "./components/Carousal/index.tsx";
import NewsComponent from './components/NewsComponent';
import AboutAASTU from './components/AboutAASTU';
import Academics from './components/Academics';
import Research from './components/Research';
import UniversityLife from './components/UniversityLife';
import ContactUs from './components/ContactUs';
import OurPartners from './components/OurPartners';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import 'animate.css';
import './App.css';

export default function App(){
    return (<Router>
        <AppBar/>
        <Routes>
            <Route exact path='/' element={<><Carousel/><NewsComponent/><AboutAASTU/><Academics/><UniversityLife/><Research/><OurPartners/><ContactUs/></>}/>
        <Route path='/signin' element={<SignIn/>}/>
        </Routes>
        <Footer/>
    </Router>);
}