import React, {Fragment, useEffect, useState} from "react";
import {Button, Form} from "semantic-ui-react";
import classes from './contact.module.css';
import axiosInstance from "../axios/axios";


const initialValues = {
    firstname: 'waldguard',
    lastname: 'galavu',
    email: 'galavu10@gmail.com',
    subject: 'Malaria',
    message: 'Lorem Ipsum',
    successMessage: '',
    showForm: true,
    loading: false,
    err: '',
}

const Contact = () => {
    const [values, setValues] = useState(initialValues);

    const {firstname, lastname, email, subject, message, successMessage, showForm, loading, err} = values


    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target;

        setValues({
            ...values,
            err: false,
            [name]: value,
        })
    };
    const handleSubmit = () => {
        setValues({
            ...values, loading: true, err: false,
        })
        axiosInstance.post(`contact/`, {
            firstname,
            lastname,
            email,
            subject,
            message,
        })
            .then((res) => {
                setValues({
                    ...values, firstname: '',
                    lastname: '',
                    email: '',
                    subject: '',
                    message: '',
                    successMessage: 'Message send successfully',
                    showForm: false,
                    loading: false,
                    err: ''
                })
                console.log(res)
            }).catch((err => {
            setValues({
                ...values, loading: false, err: err,
            })
            console.log(err.message)
        }));


    };
    const showLoading = () => (loading ? <div>Loading...</div> : '')
    const showError = () => (err ? <div>{err}</div> : '')
    const showSuccessMessage = () => (successMessage ? <div>{successMessage}</div> : '')


    const contactForm = () => (<Fragment>
            <h2>Contact us</h2>
            <p>Feel free to get in touch with us . We shall get back to you as soon as possible</p>


            <Form className={classes.form} onSubmit={handleSubmit}>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        name='firstname'
                        type='text'
                        onChange={handleChange}
                        value={firstname}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        name='lastname'
                        type='text'
                        onChange={handleChange}
                        value={lastname}/>
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                        placeholder='example@domain.com'
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={email}/>
                </Form.Field>
                <Form.Field>
                    <label>Subject</label>
                    <input
                        placeholder='Subject'
                        type='text'
                        name='subject'
                        onChange={handleChange}
                        value={subject}/>
                </Form.Field>
                <Form.Field>
                    <label>Message</label>
                    <textarea
                        placeholder='Your Message'
                        name='message'
                        onChange={handleChange}
                        value={message}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Fragment>

    );
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                {showSuccessMessage()}
                {showError()}
                {showLoading()}
                {showForm && contactForm()}
            </div>
        </div>
    );
};

export default Contact
