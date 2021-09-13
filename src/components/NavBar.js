import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Toolbar, Typography } from '@material-ui/core'

const styles  = makeStyles ({
    bar:{
        backgroundColor: "#FBB87F",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    menuItem : {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#FBB87F",
            backgroundColor : "#e55961",
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
});

export default function NavBar() {
    const classes = styles();
    return (
            <Toolbar position="sticky" className={classes.bar}>
                <Typography variant="h6" className={classes.menuItem}>
                    Kontak
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Portofolio
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Hobi
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Foto
                </Typography>
            </Toolbar>
    )
}
