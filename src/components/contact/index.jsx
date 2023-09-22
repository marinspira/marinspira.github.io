import React, { useState } from 'react';
import * as C from './styles';
import emailjs from '@emailjs/browser';

function Contact() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        tel: '',
        message: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);

        emailjs.send('service_2urrqrc', 'template_suatufk', form, '20dfEujDnZV2M9j5s')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <C.Section id="contact">
            <C.Container>
                <h2>Contact</h2>
                <C.Form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your name'
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Your e-mail'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='company'
                        placeholder='Your company'
                        onChange={handleChange}
                    />
                    <input
                        type='tel'
                        name='tel'
                        placeholder='Your WhatsApp with your country'
                        onChange={handleChange}
                        maxLength="15"
                    />
                    <textarea
                        name='message'
                        placeholder='Your message'
                        onChange={handleChange}
                    />
                    <button type='submit'>Send</button>
                </C.Form>
            </C.Container>
        </C.Section>
    );
}

export default Contact;
