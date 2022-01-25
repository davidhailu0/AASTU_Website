import {Link} from 'react-router-dom';
import './Footer.css';
export default function Footer(){
  return (
<footer>
            <div className="footer-section">
                <div>
                    <h3 className="footer-headline">Get to know us</h3>
                    <hr className="bottom_border"/>
                    <ul className='footer-list'>
                        <li><Link className="header-link" to="#">Blog</Link></li>
                        <li><Link className="header-link" to="#">About Gojo</Link></li>
                        <li><Link className="header-link" to="#">Investor Relations</Link></li>
                        <li><Link className="header-link" to="#">Carreer</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-headline">Work with Us</h3>
                    <hr className="bottom_border"/>
                    <ul className='footer-list'>
                        <li><Link className="header-link" to="#">Rent a house on Gojo</Link></li>
                        <li><Link className="header-link" to="#">Advertise your Products</Link></li>
                        <li><Link className="header-link" to="#">Rent Properties</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-headline">Need help?</h3>
                    <hr className="bottom_border"/>
                    <ul className='footer-list'>
                        <li><Link className="header-link" to="#">FAQS</Link></li>
                        <li><Link className="header-link" to="#">Privacy</Link></li>
                        <li><Link className="header-link" to="#">Support</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-headline">Contacts</h3>
                    <hr className="bottom_border"/>
                    <ul className='footer-list'>
                        <li><Link className="header-link" to="#">Facebook</Link></li>
                        <li><Link className="header-link" to="#">Telegram</Link></li>
                        <li><Link className="header-link" to="#">Twitter</Link></li>
                    </ul>
                </div>
            </div>
                <hr className="footer-hr"/>
                <p className="trade-mark"><strong>GOJO</strong>.com Copyright &copy; 2022 Gojo rental Service</p>    
        </footer>);
}