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
                setForm({
                    name: '',
                    email: '',
                    company: '',
                    tel: '',
                    message: '',
                })
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <C.Section id="contact">
            <div className='container'>
                <C.Container>
                    <C.Title>Let's talk?</C.Title>
                    <C.Form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            onChange={handleChange}
                            maxLength='20'
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='E-mail'
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='text'
                            name='company'
                            placeholder='Company'
                            onChange={handleChange}
                            maxLength='20'
                            required
                        />
                        <textarea
                            name='message'
                            placeholder='Your message'
                            onChange={handleChange}
                            required
                        />
                        <button type='submit'>Send</button>
                    </C.Form>
                </C.Container>
            </div>
        </C.Section>
    );
}

export default Contact;
