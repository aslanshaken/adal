import './App.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import box from './images/dumplings box.jpg'
import mainImage from './images/main.jpg'
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from './images/logo.png'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import first from './images/1.jpg'
import second from './images/2.png'
import third from './images/3.jpg'

const itemData = [
  // { img: `${logo}`, title: 'ds' },
  { img: `${box}`, title: 'ds' },
  { img: `${first}`, title: 'ds' },
  { img: `${second}`, title: 'ds' },
  { img: `${third}`, title: 'ds' },
]


function App() {
  return (
    <Grid textAlign={"center"}>
      {/* <AppBar position="static">
        <Toolbar className='header' >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Text1
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Text2
          </Typography>
          <Typography variant="h2" sx={{ flexGrow: 1 }}>
            Adal Food
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Text3
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Text4
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <img
          src={mainImage}
          alt={'Box'}
          loading="lazy"
          className='mainImage'
        />
        <div class="content">
          <h1>ADAL FOOD</h1>
          <p>Frozen Halal Dumplings</p>
        </div>
        <div class="mainButton">
          <Button variant="contained" className='orderButton'>Order Online</Button>
        </div>
      </Grid>
      <Grid container spacing={3} padding={9} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={4}>
          <Typography variant="h5" fontWeight="900" color={"white"} bgcolor={'#103021'} lineSpasing={"1.6"} padding={5}>
            Handmade with Love</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" fontWeight="900" color={"white"} bgcolor={'#103021'} lineSpasing={"1.6"} padding={5}>
            Simple
            Fresh
            Ingredients</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" fontWeight="900" color={"white"} bgcolor={'#103021'} lineSpasing={"1.6"} padding={5}>
            Free Delivery</Typography>
        </Grid>
      </Grid>

      <Typography variant="h5" fontWeight="900" color={"white"} bgcolor={'#103021'} lineSpasing={"1.6"} padding={5}>
        Recent </Typography>
      <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <ImageList sx={{ width: 800, height: 650 }} variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}

export default App;
