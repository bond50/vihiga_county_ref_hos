import React, {Fragment} from 'react';

const StyledParagraph = ({children}) => <Fragment>

    <p ><i className='fa fa-check-square w3-margin-right' style={{color: "#39a15e"}}/>
        {children}
    </p>
</Fragment>;

export default StyledParagraph;