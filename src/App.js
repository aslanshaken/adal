import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from './images/logo.png'
import MainImage from './images/main.jpg'
import Potato from './images/potato.jpg'
import Beef from './images/beef.jpg'
import Cilantro from './images/cilantro.jpg'
import { Paper } from '@mui/material';
import { useRef } from 'react';
import './App.css';
import CardHeader from '@mui/material/CardHeader';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}

      Adal Food {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const cards = [
  {
    src: `${Cilantro}`, alt: `${Cilantro}`, title: "Frozen Dumplings with Beef, Cilantro and Broth",
    ing: "Wheat flour, eggs, water, ground Halal beef, onions, cilantro, back pepper and salt",
    link: 'https://buy.stripe.com/14k296eyr1hz5ws146', available: false
  },
  {
    src: `${Beef}`, alt: `${Beef}`, title: "Frozen Dumplings with Beef",
    ing: "Wheat flour, eggs, water, ground Halal beef, onions, back pepper and salt",
    link: 'https://buy.stripe.com/3csbJG61V6BTf72145', available: true
  },
  {
    src: `${Potato}`, alt: `${Potato}`, title: "Frozen Dumplings with Potato",
    ing: "Wheat flour, eggs, water, potato, milk, butter and salt",
    link: "https://buy.stripe.com/14k9Byaibd0haQM6or", available: true
  }
];


const stores = [
  {
    title: 'Al Zaytoon Market',
    address: '616 FM 685 Suite A104, Pflugerville, TX 78660',
    out: false
  },
  {
    title: 'Istanbul Market Atx',
    address: '1700 Bryant Dr Suite.102, Round Rock, TX 78664',
    out: false
  },
  {
    title: 'Austin Meat Market',
    address: '12129 Ranch Rd 620 Suit 530, Austin, TX 78750',
    out: true
  },
  {
    title: 'Borderless European Market',
    address: '2121 W Parmer Ln #113, Austin, TX 78727',
    out: true
  },
];


const defaultTheme = createTheme();

export default function App() {
  const containerRef = useRef(null);
  const containerStores = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollOffset = 50; // Adjust the offset as needed
      const topPosition = containerRef.current.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  const handleScrollStores = () => {
    if (containerStores.current) {
      const scrollOffset = 150; // Adjust the offset as needed
      const topPosition = containerStores.current.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div position="fixed"  >
        <Toolbar sx={{ justifyContent: 'center', bgcolor: 'background.paper' }} >
          <img src={Logo} alt="Logo" style={{ width: '250px', height: 'auto', marginTop: '30px' }} />
        </Toolbar>
      </div>
      <main>
        <Box
          sx={{
            bgcolor: 'white',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" >
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Frozen <span className="zigzag"> Delicious</span> Dumplings
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              align="center"
              color="gray"
              padding="15px"
              marginBottom='35px'
              paragraph>
              Enjoy the taste of simplicity with fresh ingredients, feel the care in
              every handmade creation, and have it all delivered to you for FREE
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={handleScroll}>Order Online</Button>
              <Button variant="contained" color='inherit' onClick={handleScrollStores}>Find in Local Stores</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md" >
          <Typography
            component="h3"
            variant="h5"
            align="center"
            color="gray"
            fontWeight="bold"
            marginBottom='35px'
          >
            Just Boil for 7 Minutes, No Steamer Needed!
          </Typography>
          <Grid container spacing={3} ref={containerRef}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '120%'
                    }}
                    image={card.src}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="body1" fontWeight={700} component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      Ingredients: {card.ing}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography variant="h5" color='GrayText' fontWeight={700} component="h3" sx={{ fontSize: '2.7vh' }}>1 LB - $15</Typography>
                  </CardActions>
                  {card.available ? (
                    <CardActions>
                      <Button size="small" href={card.link} target="_blank">Order Now</Button>
                    </CardActions>
                  ) : (
                    <CardActions>
                      <Button size="small" color='warning'>Out of Stock</Button>
                    </CardActions>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
      </main>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${MainImage})`,
          filter: 'brightness(0.7)'
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={MainImage} alt={"main"} />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h2" variant="h4" color="inherit" gutterBottom>
                Handmade with simple,
                fresh ingredients
                & lots of love
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography variant="h5" align="center" paddingLeft='4%' paddingRight='4%' fontWeight="bold" color="text.secondary" component="p" ref={containerStores}>
          Where else you can find our frozen dumplings
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {stores.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>

                  <Typography component="body" variant="body" color="text.primary">
                    {tier.address}
                  </Typography>

                  {tier.out ?
                    <CardActions>
                      <Button size="small" color='warning'>Out of Stock</Button>
                    </CardActions>
                    :
                    <CardActions>
                      <Button size="small" color="primary" >Available </Button>
                    </CardActions>
                  }
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Adal Food
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Support: 929-928-5292
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Made with Love in Austin,TX ❤️
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider >
  );
}
