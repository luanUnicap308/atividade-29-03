import React from "react";
import { Button } from 'react-bootstrap';

export const ButtonCircle = (props) => (
    <Button
        variant="outline-light"
        style={{ borderRadius: '50%' }}
        onClick={props.onclick}
    >
        {props.children}
    </Button>

)
