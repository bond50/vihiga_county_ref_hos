import React, {useState} from 'react';
import {Segment, Visibility} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {removeFixedNav, setFixedNav} from "../../../store/actions/nav";
import {withRouter} from "react-router-dom";


import TopBar from "./navigationItems/Topbar/TopBar";
import NavigationItems from "./navigationItems/NavigationItems";


const Navbar = ({setFixedNav, removeFixedNav}) => {

    const [state, setState] = useState({
        dropdownMenuStyle: {
            display: "none",
        }
    })

    const handleToggleDropdownMenu = () => {
        let newState = {...state};
        if (newState.dropdownMenuStyle.display === "none") {
            newState.dropdownMenuStyle = {display: "block"};
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
                <NavigationItems dropdownMenuStyle={state.dropdownMenuStyle} handleToggleDropdownMenu={handleToggleDropdownMenu}/>
            </Visibility>
        </>
    );
};

export default connect(null, {setFixedNav, removeFixedNav})(withRouter(Navbar));
