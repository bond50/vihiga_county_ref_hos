import React from 'react';
import StyledParagraph from "../styledParagraph";
import Design from "../../../hoc/Design";

const Infrastructure = () =>
    <div className={'w3-container w3-padding'}>
        <Design>
            <h3 className='w3-padding-24'>Hospital Infrastructure</h3>
            <p>The hospital needs well-established infrastructure for delivery of quality services. The infrastructure
                is to
                be maintained regularly.</p>
            <h4> Strategies:</h4>
            <StyledParagraph>Modernize and upgrade health infrastructure.</StyledParagraph>
            <StyledParagraph>Adopt evidence based health infrastructure investments. Ensure maintenance and replacement
                of
                the existing
                physical infrastructure as perexisting norms, standards and policies.</StyledParagraph>
            <StyledParagraph>Optimize utilization of existing physical space.</StyledParagraph>
            <StyledParagraph>Expand the scope of medical equipment and vehicles by acquiring new ones and maintaining
                existing ones</StyledParagraph>
        </Design>


    </div>;

export default Infrastructure;