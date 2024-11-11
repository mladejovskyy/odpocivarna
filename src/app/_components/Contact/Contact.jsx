import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <input placeholder="Jmeno" type="text" id="name" name="name" required/>
                    </div>
                    <div className="form-group">
                        <input placeholder="Email" type="email" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Vase zprava" id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Odeslat</button>
                </form>
            </div>
            <div className="contact-extra">
                <div className="items-continer">
                    <div className="item">
                        <img src="/images/mail-icon.webp" alt=""/>
                        info@soskolin.eu
                    </div>
                    <div className="item">
                        <img src="/images/tel-icon.webp" alt=""/>
                        +420 777 777 777
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1281.723159034017!2d15.206810076837801!3d50.021732185350736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c153ac69cc677%3A0x7d6e91f57f941c3!2sSO%C5%A0%20INFORMATIKY%20A%20SPOJ%C5%AE%20A%20SOU%20KOL%C3%8DN!5e0!3m2!1sen!2scz!4v1731366799439!5m2!1sen!2scz"
                    width="600"
                    height="300"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    className='map'
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    );
};

export default Contact;