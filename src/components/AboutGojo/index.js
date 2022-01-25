import Box from '@mui/material/Box';
import './AboutGojo.css';
import customer1Image from '../../images/GettyImages-507244236.jpg'
import customer2Image from '../../images/lady-img.jpg'
import customer3Image from '../../images/lady-img.jpg'
export default function AboutGojo(){
    return (<section className='about-us' id="about_gojo">
            <h3 className='about-us-title'>About Gojo.com</h3>
            <hr/>
            <h2>Your best Companion</h2>
            <p className='about-us-para'>Gojo is a new start up company that offers the opportunity for house owners and renter to easily get what they want in the fastest time possible.
                So choose us we will be your best companion in finding a home where you and your family enjoy without any damage done to your pocket 😂😂.
            </p>
            <h2>Here is something that our customers got to say about us</h2>
            <Box className="testimony-container" sx={{display:{xs:'grid',md:'flex'}}} justifyContent={'space-between'} rowGap={'2rem'}>
                <div className="testimony_div animate__animated">
                    <img src={customer1Image} className="testimony" alt="customer 1"/>
                    <h4>Martha Simon</h4>
                    <p>I like the way the website is laid out and in addition to that I got the house I wanted</p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
                <div className="testimony_div animate__animated">
                    <img src={customer2Image} className="testimony" alt="Customer 2"/>
                    <h4>Mekdes Tesfaye</h4>
                    <p>I like the way the website is laid out and in addition to that I got the house I wanted</p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                </div>
                <div className="testimony_div animate__animated">
                    <img src={customer3Image} className="testimony" alt="Customer 3"/>
                    <h4>Bethelhem Teshome</h4>
                    <p>I like the way the website is laid out and in addition to that I got the house I wanted</p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
            </Box>
        </section>);
}