import React, {useState} from 'react';
import {Segment, Visibility} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {removeFixedNav, setFixedNav} from "../../store/actions/nav";
import {withRouter} from "react-router-dom";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";
import './Navbar.css';


const Navbar = ({setFixedNav, removeFixedNav}) => {

    const [state, setState] = useState({
        dropdownMenuStyle: {
            display: "none",
        }
    })

    const handleToggleDropdownMenu = () => {
        let newState = {...state};
        if (newState.dropdownMenuStyle.display === "none") {
            newState.dropdownMenuStyle = {display: "flex"};
        } else {
            newState.dropdownMenuStyle = {display: "none"};
        }

        setState(newState);
    };

    return (
        <>

            <Visibility
                once={false}
                onBottomPassed={() => (setFixedNav())}
                onBottomPassedReverse={() => (removeFixedNav())}
            >
                <Segment
                    vertical
                    inverted
                    className='mySegment'>

                    <Desktop/>
                    <Mobile
                        dropMenuStyle={state.dropdownMenuStyle}
                        handleDropToggleDropdownMenu={handleToggleDropdownMenu}/>

                </Segment>
            </Visibility>
        </>
    );
};

export default connect(null, {setFixedNav, removeFixedNav})(withRouter(Navbar));
