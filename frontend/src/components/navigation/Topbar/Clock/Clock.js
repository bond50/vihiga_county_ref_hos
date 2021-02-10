import React, {useEffect, useState} from 'react';
import {Header} from "semantic-ui-react";

const Clock = () => {
    const [state, setState] = useState({time: new Date().toLocaleString()});
    useEffect(() => {
        const timeInterval = setInterval(() => {
            tick();
        }, 1000);

        return () => {
            clearInterval(timeInterval);
        }
    }, [state.time]);

    function tick() {
        setState(
            {
                time: new Date().toLocaleString()
            });
    }

    return (

        <div>
            {state.time}
        </div>

    );
};

export default Clock;