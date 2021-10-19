import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <h2>For any query contact us</h2>
            <div className="contact-form">
            <div className="contact-form-div">
            <form action="">
                <div>
                    <input type="text" placeholder="Your Name" />
                </div>
                <div>
                    <input type="email" placeholder="Your Email" />
                </div>
                <div>
                    <input type="tel" placeholder="Your Phone Number" />
                </div>
                <div>
                    <textarea rows="3" cols="50" name="comment" form="usrform" placeholder="Write your problem">
                    </textarea>
                </div>
                <div>
                    <input className="contact-form-btn" type="submit" value="Send" />
                </div>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Contact;