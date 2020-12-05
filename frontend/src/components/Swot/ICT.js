import React from 'react';
import StyledParagraph from "../styledParagraph";
import Design from "../../../hoc/Design";

const Ict = () => <div className='w3-container w3-padding'>
    <Design>
        <h3 className='w3-padding-24'>Health Research And Information Communication Technology </h3>
        <p>Hospital operations needs a well-functioning HMIS (CHIS) that is supported by a robust ICT system to
            facilitate
            the
            management of the institution and service delivery</p>
        <p><strong>The hospital will</strong></p>
        <ul>
            <StyledParagraph>Upgrade the existing HMIS in the facility. Sourcing of potential partners to assist in
                upgrading of the HMIS.
            </StyledParagraph>
            <StyledParagraph>
                Strengthen the hospital security surveillance through an efficient CCTV surveillance.
            </StyledParagraph>
            <StyledParagraph>
                Improve the internal communication system in the facility.Upgrading of the hospital telephone
                network by acquisition of more telephones to be distributed departmentally.
            </StyledParagraph>
            <StyledParagraph>
                Ensure accessibility, availability and accuracy of hospital data. Regular sensitization meetings
                by ICT staff to enable accessibility of data.
            </StyledParagraph>

        </ul>
    </Design>

</div>;

export default Ict;