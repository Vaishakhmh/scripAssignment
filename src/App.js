import Login from './pages/login'
import Home from './pages/home'
import Create from './pages/create'
import {Routes,BrowserRouter,Route,Navigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {checkLoginUser} from './actions/authActions'
import {connect} from 'react-redux'


function App(props) {
  const [isAuth,setisAuth]=useState(false);
  useEffect(()=>{
     props.checkLogin();
  },[])
  useEffect(()=>{
    setisAuth(props.auth.isAuthenticated);
  },[props.auth.isAuthenticated])
  return(
    <div>
    <BrowserRouter>
    {isAuth?<Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/create" element={<Create/>}/>
        <Route path="*" element={<Navigate replace to="/"/>}/>
    </Routes>:
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="*" element={<Navigate replace to="/"/>}/>
    </Routes>
    }
  </BrowserRouter>
  </div>)
}

const mapDispatchToProps=(dispatch)=>({
  checkLogin:()=>dispatch(checkLoginUser())
})

const mapStateToProps=state=>({
  auth:state.authReducer})

export default connect(mapStateToProps,mapDispatchToProps)(App);
