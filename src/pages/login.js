import {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DP from '@mui/material/Avatar/Avatar';
import Typography from '@mui/material/Typography';
import Image from '../images.png'
import {loginUser,checkLoginUser} from '../actions/authActions'
import {connect} from 'react-redux'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'


function Login(props){
    const {signInUser}=props;
    const [Id,setId]=useState();
    const navigate  = useNavigate();

    useEffect(()=>{
      if(props.auth.isAuthenticated){
        navigate('/home');
            }

    },[props.auth.isAuthenticated])
    return(
        <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor:'#f48122',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
            <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyConten:'center'
            }}
          >
            <img src={Image}/>
            </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <DP />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Id"
                label="EmpId"
                name="Employee ID"
                onChange={(e)=>setId(e.target.value)}
                autoFocus
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>signInUser(Id)}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    )
}

 const mapDispatchToProps=dispatch=>({
    signInUser: (Id) => dispatch(loginUser(Id)),
    checkLogin:()=>dispatch(checkLoginUser())
  });

  const mapStateToProps=state=>({
      auth:state.authReducer
  })


export default connect(mapStateToProps,mapDispatchToProps)(Login);