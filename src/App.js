import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AppBar from './components/AppBar';
import Header from './components/Header';
import AboutGojo from './components/AboutGojo';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import './App.css';
export default function App(){
    return (<Router>
        <AppBar/>
        <Routes>
            <Route exact path='/' element={<><Header/><AboutGojo/></>}/>
            <Route path='/home' element={<><Header/><AboutGojo/></>}/>
            <Route path='/blog' element={<><Header/><AboutGojo/></>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
    </Router>);
}