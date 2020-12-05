import React from 'react';


export const validate = values => {
    const errors = {}
    if (!values.firstname) {
        errors.firstname = 'Required'
    }
    if (!values.lastname) {
        errors.lastname = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.subject) {
        errors.subject = 'Required'
    } else if (values.subject.length < 3) {
        errors.subject = 'Not Valid'
    }
    if (!values.message) {
        errors.message = 'Required'
    } else if (values.message.length < 10) {
        errors.message = 'Not Valid'
    }
    return errors
}



