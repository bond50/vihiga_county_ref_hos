import React from "react";
import {Field, reduxForm} from "redux-form";
import {validate} from "../ui/form/validation";
import SharedForm from "../form/sharedForm";
import {renderInput, renderTexArea} from "../ui/form/Field";
import {Icon} from "semantic-ui-react";


const FIELDS = {
    firstname: {
        placeholder: "First Name",
        type: 'text',
        icon: 'user',
        iconPosition: 'left',
        component: renderInput
    },
    lastname: {
        placeholder: "Last Name",
        type: 'text',
        icon: 'user',
        iconPosition: 'left',
        component: renderInput
    },
    email: {
        placeholder: "Email address",
        type:'email',
        icon:'envelope',
        iconPosition:'left',
        component: renderInput
    },
    subject: {
        placeholder: "Subject",
        type:'email',
        icon:'book',
        iconPosition:'left',
        component: renderInput
    },
    message: {
        placeholder: "Your Message",
        component: renderTexArea
    },
}


const fields = []

for (let [key, value] of Object.entries(FIELDS)) {
    const {icon, type, component, placeholder, iconPosition} = value;
    fields.push(
        <Field
            key={key}
            icon={icon}
            iconPosition={iconPosition}
            type={type}
            component={component}
            name={key}
            placeholder={placeholder}
        />
    )
}


const ContactForm = ({handleSubmit, pristine, reset, submitting}) => {
    return (
        <SharedForm
            content="Fill out the form below to contact us"
            handleSubmit={handleSubmit}
            pristine={pristine}
            columnMaxWidth={{maxWidth: 500}}
            reset={reset}
            message={
                <>
                    <Icon name='marker' color='red'/>
                    <a href="https://www.google.com/maps/dir//0.079091,34.7223905/@0.079091,34.7223905,15z">Get
                        Directions
                        Here</a>
                </>
            }
            submitting={submitting}>
            {fields}
        </SharedForm>
    );
};

export default reduxForm({
    form: "contact",
    validate,
})(ContactForm);
