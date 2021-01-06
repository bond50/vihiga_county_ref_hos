import React from 'react';
import {Form, Grid, Header, Image, Message} from "semantic-ui-react";
import FormButton from "../ui/form/FormButton";
import logo from "../../assets/logo/VCGlogo.png";

const SharedForm = ({content,buttonCaption, onSubmit, children, submitting,columnMaxWidth, pristine, reset,message}) => {
    return (
        <Grid style={{height: '100vh',marginTop:'1px'}} verticalAlign='middle' textAlign='center' >
            <Grid.Column style={columnMaxWidth}>
                <Header as='h2' color='teal'>
                    <Image src={logo} size='big'/> {content}
                </Header>
                <Form onSubmit={onSubmit} error className="attached fluid segment" size='large'>
                    {children}
                    <Form.Group inline>
                        <FormButton primary disabled={submitting}>
                            {buttonCaption}
                        </FormButton>
                        <FormButton onClick={reset} disabled={pristine || submitting}>
                            Reset Fields
                        </FormButton>
                    </Form.Group>
                </Form>
                <Message>
                    {message}
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SharedForm;