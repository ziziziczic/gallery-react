import './App.css';
import Menu from './components/Memu';
import { Container , Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Banner from './components/Banner';
import Items from './components/Items';
import hotDealItems from './assets/hot-deal';

let loading = false;

const rootStyle = {
  display : 'flex',
  flexDirection : 'column',
  // justifyContent : 'center',
  // alignItems :'start',
  color : '#000',
  bgcolor : '#42f575',
  padding:0,
}

const useStyles = makeStyles({
  menuStyle : {
    // borderBottom : '1px solid #fff',
  }
});

const boxStyle = {
  // bgcolor : '#2e2eee',
  // bgcolor : '#eee',
  height: '300px',
  // border: 1,
}

function App() {
  const classes = useStyles();

  return (
          <>
            <Container sx={rootStyle}>
              <Menu className={classes.menuStyle} loading={loading}></Menu>
              <Box sx={boxStyle}></Box>
            </Container>
              <Banner></Banner>

              <Box sx={{maxWidth : '1200px', margin : '0 auto'}}><h1>타임 핫딜</h1></Box>
              <Items items= {hotDealItems}></Items>
          </>);
}

export default App;
