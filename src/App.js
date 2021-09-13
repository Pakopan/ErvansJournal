import {createTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

const styles = makeStyles({
  App : {
    fontFamily: ["Roboto"],
    textAlign : "center",
    color : "#1F2431",
    backgroundColor : "#1F2431",
    padding : 0,
    margin : 0,
  },
  mainBody : {
    backgroundColor : "#E2E0BC",
    marginLeft : "20%",
    marginRight : "20%",
    paddingTop : "1%",
    height : "100vh"
  },
  content : {
    padding : "2rem 2rem 3rem 3rem",
    fontStyle : "italic",
  }
  }
);



function App() {
  const classes = styles();
  return (
    <div className={classes.App}>
      <ThemeProvider>
        <div className={classes.mainBody}>
          <Header/>
              <NavBar/>
              <Typography variant="h6" className={classes.content}>Ini adalah sebuah web random yang dibuat oleh Ervan Andi Wijaya dengan keisengan semata.
                    Teman-teman akan menjumpai banyak tulisan mengenai hobi, projek, foto, dll.
                </Typography>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
