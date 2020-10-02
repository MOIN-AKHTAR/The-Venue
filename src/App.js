import React,{useState,useEffect} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import Header from './Components/Header';
import {theme} from './Theme';
import Featured from './Components/Featured';
import Vunue from './Components/Vunue';
import  './App.css';

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [changeHeaderColor, setChangeHeaderColor] = useState(false);
  const changeHeaderColorFunc=()=>{
      if(window.scrollY>0){
        setChangeHeaderColor(true)
      }else{
        setChangeHeaderColor(false)
      }
  }
  useEffect(() => {
    window.addEventListener("scroll",changeHeaderColorFunc)
  }, [])

  const setDrawer=()=>setOpenDrawer(!openDrawer)

  return (
    <ThemeProvider theme={theme}>
    <div style={{height:"1500px",background:'cornflowerblue'}}>
      <Header setDrawer={setDrawer} openDrawer={openDrawer} changeHeaderColor={changeHeaderColor}/>
      <Featured/>
      <Vunue/>
    </div>
    </ThemeProvider>
  );
}

export default App;
