import React, {useState} from 'react';
import {Grid, Segment, Visibility} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {removeFixedNav, setFixedNav} from "../../store/actions/nav";
import {withRouter} from "react-router-dom";


import TopBar from "./desktop/navigationItems/Topbar/TopBar";
import NavigationItems from "./desktop/navigationItems/NavigationItems";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";
import './Navbar.css'

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
            {/*<TopBar/>*/}
            <Visibility
                once={false}
                onBottomPassed={() => (setFixedNav())}
                onBottomPassedReverse={() => (removeFixedNav())}
            >
               <Desktop/>
               <Mobile dropMenuStyle={state.dropdownMenuStyle} handleDropToggleDropdownMenu={handleToggleDropdownMenu}/>
            </Visibility>
        </>
    );
};

export default connect(null, {setFixedNav, removeFixedNav})(withRouter(Navbar));
