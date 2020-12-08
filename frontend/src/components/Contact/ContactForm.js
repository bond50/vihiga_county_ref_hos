import React, { Fragment } from 'react';
import { Form, Input, Message, TextArea } from "semantic-ui-react";
import { Field, reduxForm } from 'redux-form';
import { validate } from "./validation";
import { backEndUrl } from '../../utils/common.resource';



const renderFields = ({ input, placeholder, meta }) => (
    <Form.Field error={!!(meta.touched && meta.error)}>
        <Form.Input
            {...input}
            placeholder={placeholder}
            autoComplete='off'
        />
        {renderError(meta)}
    </Form.Field>

);

const renderError = ({ error, touched }) => {
    if (error && touched) {
        return (
            <Message error size='mini'>
                <Message.Header >{error}</Message.Header>
            </Message>
        )
    }

}

const renderTexArea = ({ input, placeholder, meta }) => (
    <Form.Field error={!!(meta.touched && meta.error)}>
        <Form.TextArea
            {...input}
            placeholder={placeholder}
        />
        {renderError(meta)}
    </Form.Field>


);

const submittedForm = (formValues) => {
    fetch(`${backEndUrl}/contact`, { method: "POST", body: { ...formValues } })
        .then(async response => {
            if (response.ok) {
                return response.json().then(data => {
                    // handle success event 
                })
            }
        }
        )
        .catch(error => {
            // handle error event
            console.error(error);

        })
}
const ContactForm = ({ handleSubmit, pristine, reset, submitting, submitSucceeded, ...props }) => {
    return (
        <Fragment>
            <Message
                attached
                header='Vihiga County Referral Hospital'
                content='Fill out the form below to contact us'
            />
            <Form onSubmit={handleSubmit(submittedForm)} error className='attached fluid segment'>
                <Field
                    control={Input}
                    component={renderFields}
                    name='firstname'
                    placeholder='First Name'

                />
                <Field
                    control={Input}
                    component={renderFields}
                    name='lastname'
                    placeholder='Last Name'
                />
                <Field
                    control={Input}
                    component={renderFields}
                    name='email'
                    placeholder='E-Mail Address'
                />
                <Field
                    control={Input}
                    component={renderFields}
                    name='subject'
                    placeholder='Subject'
                />
                <Field
                    control={TextArea}
                    component={renderTexArea}
                    name='message'
                    placeholder='Type Your Message Here'
                />
                <Form.Group inline >
                    <Form.Button primary disabled={pristine || submitting}>Submit</Form.Button>
                    <Form.Button onClick={reset} disabled={pristine || submitting}>Rest Fields</Form.Button>
                </Form.Group>
            </Form>
        </Fragment>
    );
};

export default reduxForm({
    form: "contact",
    validate
})(ContactForm);