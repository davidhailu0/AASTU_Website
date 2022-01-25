import './ContactUs.css';
export default function ContactUs(){
    return (<section className="contact-us" id="contact_gojo">
            <h3 className='about-us-title'>Contact us</h3>
            <hr/>
            <h2>If you want to work with us or give us suggestion</h2>
             <form className='contact-form' method="POST">
                    <label className="headline-label color" htmlFor='name' >Name:</label>
                    <input id="name" className='input-style color' placeholder="Enter your name" name="Name" required/>
                    <label className="headline-label color" htmlFor='email'>Email:</label>
                    <input type="email" className='input-style color' placeholder="Enter your email address" name="Email" required/>
                    <label className="headline-label color textarea-label" htmlFor="location">Suggestion:</label>
                    <textarea className="textarea" placeholder="Questions or Suggestions..." name="Content" required></textarea>
                    <button id="contact-btn" type='submit' name="contact_us">Contact us!</button>
                </form>
        </section>);
}