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
        axiosInstance.post(`api/token/`, {
            email: formData.email,
            password: formData.password,
        })
            .then((res) => {
                const {refresh, access} = res.data;
                localStorage.setItem('access_token', access);
                localStorage.setItem('refresh_token', refresh);
                axiosInstance.defaults.headers['Authorization'] = 'JWT' + localStorage.getItem('access_token');
                history.push('/blog');
            }).catch((err => {
            console.log(err)
        }));

    };

    return (
        <SharedForm
            content="Log-in to your account"
            onSubmit={handleSubmit(onSubmit)}
            pristine={pristine}
            reset={reset}
            buttonCaption='Login'
            columnMaxWidth={{maxWidth: 450}}
            message={
                <>
                    New user account ? <Link to='/auth/signup'>Sign up here</Link>
                </>
            }
            submitting={submitting}>
            {fields}
        </SharedForm>
    );
};

export default reduxForm({
    form: "login",
    validate,
})(SignupForm);
