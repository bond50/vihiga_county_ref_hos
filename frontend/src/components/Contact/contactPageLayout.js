import React, {useState} from "react";
import {
    Dimmer,
} from "semantic-ui-react";
import ContactForm from "./MyForm";
import axios from "axios";
import ContactModal from "./contact-modal";
import {backEndUrl} from "../../utils/common.resource";

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalTitle, setModalTitle] = useState("");

    const handleOnClose = () => {
        setShowModal(false);
    };

    const onSubmit = ({email, firstname, lastname, subject, message}) => {
        setIsSubmitting(true);
        axios
            .post(`${backEndUrl}/contact/`, {
                firstname,
                lastname,
                email,
                subject,
                message,
            })
            .then((response) => {
                setIsSubmitting(false);
                setShowModal(true);
                setModalMessage(response.statusText);
                setModalTitle("Successful submitted, Thank you for contacting us");
            })
            .catch((error) => {
                setIsSubmitting(false);
                setShowModal(true);
                setModalMessage(error.message);
                setModalTitle("Error while saving, please try again later");
            });
    };

    return (

        <>
            <ContactForm onSubmit={onSubmit}/>
            <div>
                <Dimmer active={isSubmitting}>
                </Dimmer>
            </div>
            <ContactModal
                title={modalTitle}
                message={modalMessage}
                dimmer={true}
                open={showModal}
                onClose={handleOnClose}/>
        </>
    );
};

export default ContactUs;
