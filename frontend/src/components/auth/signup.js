import React from "react";
import {Field, reduxForm} from "redux-form";
import {useHistory} from "react-router";
import {validate} from "../ui/form/validation";
import SharedForm from "../form/sharedForm";
import {renderInput} from "../ui/form/Field";
import axiosInstance from "../axios/axios";

import {Link} from "react-router-dom";


const FIELDS = {
    email: {
        placeholder: "Email address",
        type: 'email',
        icon: 'user',
        iconPosition: 'left',
        component: renderInput
    },
    username: {
        placeholder: "Username",
        type: 'text',
        icon: 'user',
        iconPosition: 'left',
        component: renderInput
    },
    password: {
        placeholder: "Enter password",
        type: 'password',
        icon: 'lock',
        iconPosition: 'left',
        component: renderInput
    },
}


const fields = []

for (let [key, {component, control, icon, iconPosition, placeholder, type}] of Object.entries(FIELDS)) {
    fields.push(
        <Field
            key={key}
            icon={icon}
            iconPosition={iconPosition}
            type={type}
            control={control}
            component={component}
            name={key}
            placeholder={placeholder}
        />
    )
}


const SignupForm = ({handleSubmit, pristine, reset, submitting}) => {
    const history = useHistory()
    const onSubmit = (formData) => {
        axiosInstance.post(`users/create/`, {
            email: formData.email,
            user_name: formData.username,
            password: formData.password,
        })
            .then((res) => {
                history.push('/auth/login');
            }).catch((err => {
            console.log(err)
        }));

    };

    return (
        <SharedForm
            content="Sign up for an account"
            onSubmit={handleSubmit(onSubmit)}
            pristine={pristine}
            reset={reset}
            columnMaxWidth={{maxWidth: 450}}
            message={
                <>
                   Already have account ? <Link to='/auth/login'>Login in here</Link>
                </>
            }
            submitting={submitting}>
            {fields}
        </SharedForm>
    );
};

export default reduxForm({
    form: "signup",
    validate,
})(SignupForm);
