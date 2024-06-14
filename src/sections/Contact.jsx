import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_bqabrtp', 'template_negqfni', form.current, {
            publicKey: 'zRKk1ME9l1tRJg0qM',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            e.target.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Contact;