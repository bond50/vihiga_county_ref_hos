import {Form, Message} from "semantic-ui-react";
import React from "react";


export const renderError = ({error, touched}) => {
    if (error && touched) {
        return (
            <Message error size="mini">
                <Message.Header>{error}</Message.Header>
            </Message>
        );
    }
};

export const renderInput = ({input, placeholder, meta, icon, iconPosition, type}) => (
    <Form.Field error={!!(meta.touched && meta.error)}>
        <Form.Input
            {...input}
            fluid icon={icon}
            iconPosition={iconPosition}
            type={type}
            placeholder={placeholder}
            autoComplete="off"/>
        {renderError(meta)}
    </Form.Field>
);


export const renderTexArea = ({input, placeholder, meta}) => (
    <Form.Field error={!!(meta.touched && meta.error)}>
        <Form.TextArea {...input} placeholder={placeholder}/>
        {renderError(meta)}
    </Form.Field>
);
