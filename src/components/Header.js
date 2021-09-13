import {makeStyles} from '@material-ui/core/styles'
import renko3 from './renko3.png'
import React from 'react'
import { Typography } from '@material-ui/core';

const styles = makeStyles (
    {
        wrapper : {
            display: "flex",
            flexDirection: "column", 
            alignItems: "center", 
            paddingBottom: "1rem"
        },
        logo: {
            height : "20%",
            width : "20%",
        },
        title: {
            padding :"0",
            margin :"0",
            letterSpacing: "0.3rem"
        }
    }
);

function Header() {
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <img src={renko3} className={classes.logo}/>
            <Typography className={classes.title} variant="h4">Ervan's Journal</Typography>
        </div>
    )
}
export default Header
