import React from 'react';
import {Form, Grid, Header ,Message} from "semantic-ui-react";
import FormButton from "../ui/form/FormButton";


const SharedForm = ({content,buttonCaption, onSubmit, children, submitting,columnMaxWidth, pristine, reset,message}) => {
    return (
        <Grid style={{margin:'2em 0'}} verticalAlign='middle' textAlign='center' >
            <Grid.Column style={columnMaxWidth}>
                <Header as='h1'>
                   {content}
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