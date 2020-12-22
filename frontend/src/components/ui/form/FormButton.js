import React from 'react';
import {Form} from "semantic-ui-react";

const FormButton = (props) => {

    return (
        <Form.Button  disabled={props.disabled} onClick={props.onClick} {...props}>
            {props.children}
        </Form.Button>
    );
};
FormButton.defaultProps = {
    disabled: "false",
    children: "Submit"
}

export default FormButton;