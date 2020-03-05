import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./Register.css";




const Register = () => {
    const [id, setId] = useState("");

    return (
        <Paper>
            <div className="row">
                <span className="cell col1">column 1-1</span>
                <span className="cell col1">column 1-2</span>
            </div>
            <div className="row">
                <span className="cell col2">column 2-1</span>
                <span className="cell col2">column 2-2</span>
            </div>
        </Paper>
    );
};



export default Register;
