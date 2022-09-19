import "./contact.css"
import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();
        
        const name = e.target.elements.user_name.value;
        const subj = e.target.elements.user_subject.value;
        const email = e.target.elements.user_email.value;
        const message = e.target.elements.message.value;

        if(!(name === "" || subj === "" || email === "" || message === "")) {
            console.log("submitted");
            emailjs.sendForm('service_15kdnle', 'template_c4jnnoo', formRef.current, 'SM7VwO6yrGjIp_Z_M')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        }
    }

    return(
        <div className = "c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lets get in contact!</h1>
                    <div className="c-info">
                        <div className="c-info-items">
                            <p style={{fontSize: '1.5rem'}} className="phone"> <span style={{fontWeight: 'bolder'}}>Phone: </span>954-612-2450</p>
                        </div>
                        <div className="c-info-items">
                            <p style={{fontSize: '1.5rem'}} className="email"> 
                                <span style={{fontWeight: 'bold'}}> Email: </span>
                                wandnathan@ufl.edu 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Let me know more about you! </b>
                         You can email me using the box below or using the email on the side! 
                    </p>
                    <form ref={formRef} onSubmit={handleSumbit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea name="message" placeholder="Message" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "Thank you"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact