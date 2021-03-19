import React,{useEffect,useState} from 'react';
import './App.css';
import Post from './Post';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';
import Navigation from "./Navigation";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function getModalStyle() {
  const top = 50; 
  const left = 50; 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


function App() {
  // const [posts,setPosts]=useState([]);
  // const [message,setMessage]=useState("");
  // const [messageInModal,setMessageInModal]=useState("");
  // const [open,setOpen]=useState(false);
  // const classes=useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  // const [username,setUsername]=useState('');
  // const [email,setEmail]=useState('');
  // const [password,setPassword]=useState('');
  // const [user,setUser]=useState("");
  // const [openLogin,setOpenLogin]=useState(false);
  // useEffect(()=>{
  //   fetch("http://localhost:5000/getPosts",{
  //     method:"POST",
  //     heders:{
  //       "Content-Type":"application/json"
  //     }
  //   })
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setPosts(data.message);
  //   })
  //   .catch((error)=>{
  //     setMessage(error)
  //   })
  // },[posts])

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const SignUp=(event)=>{
  //   event.preventDefault();
  //   let data={
  //     username:username,
  //     email:email,
  //     password:password
  //   }
  //   fetch("http://localhost:5000/signUp",{
  //     method:"POST",
  //     body:JSON.stringify(data),
  //     headers:{
  //       "Content-Type":"application/json"
  //     }
  //   }).then((res)=>res.json())
  //   .then((data)=>{
  //     setUsername("");
  //     setEmail("");
  //     setPassword("");
  //     if(data.message==="User SuccessFully registered 😃")
  //     {
  //         setOpen(false);
  //     }
  //     else{
  //       setMessageInModal(data.message);
  //     }

  //   })
  //   .catch((error)=>{
  //     setMessage(error)
  //   })
  // }
  // const login=(event)=>{
  //   event.preventDefault();
  //   let data={
  //     email:email,
  //     password:password
  //   }
  //   fetch("http://localhost:5000/login",{
  //     method:"POST",
  //     body:JSON.stringify(data),
  //     headers:{
  //       "Content-Type":"application/json"
  //     }
  //   })
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //       if(data.message=="Success")
  //       {
  //         sessionStorage.setItem("email",email);
  //         sessionStorage.setItem("token",data.token);
  //       }
  //       else{
  //         setMessage(data.message)
  //       }
  //       setEmail("");
  //       setPassword("");
  //       setOpenLogin(false)
        
  //   })
  //   .catch((error)=>{
  //     setMessage(error)
  //   })
  // }
  // const handleCloseLogin=()=>{
  //   setOpenLogin(false);
  // }

  // const logout=()=>{
  //   sessionStorage.removeItem("email");
  //   sessionStorage.removeItem("password");
  // }
  // if(posts.length>0)
  // {
  // return (
  //   <div className="app">

  //     <Modal
  //       open={open}
  //       onClose={handleClose}
        
  //     >
  //     <div style={modalStyle} className={classes.paper}>
          
  //         <center>
  //         <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""></img>
  //         <form className="app__signup">
  //         <Input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  //         <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  //         <Button type="submit" onClick={SignUp}>SignUp</Button>
  //         </form>
  //         {messageInModal?<p>{messageInModal}</p>:null}
  //         </center>
  //       </div>
  //     </Modal>
  //     <Modal
  //       open={openLogin}
  //       onClose={handleCloseLogin}
        
  //     >
  //     <div style={modalStyle} className={classes.paper}>
          
  //         <center>
  //         <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""></img>
  //         <form className="app__signup">
  //         <Input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  //         <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  //         <Button type="submit" onClick={login}>Login</Button>
  //         </form>
  //         {messageInModal?<p>{messageInModal}</p>:null}
  //         </center>
  //       </div>
  //     </Modal>
  //     <Navigation></Navigation>
  //     {/* <div className="app__header">
  //       <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""></img>
  //     </div> */}
  //     {sessionStorage.getItem("email")?<Button onClick={logout}>Logout</Button>:
  //     <>
  //     <Button onClick={()=>setOpen(true)}>SignUp</Button>
  //     <Button onClick={()=>setOpenLogin(true)}>Login</Button>
  //     </>
  //     }
  //     <>
  //     {
  //       posts.map((post,index)=>{
  //         return <Post key={index} username={post.username} caption={post.caption} imageUrl={post.imageUrl}></Post>
  //       })
  //     }
  //     </>
  //     {message?<p className="app__message">{message}</p>:null}
  //   <ImageUpload></ImageUpload>
  //   </div>
  // );
  // }
  // else{
  //   return null;
  // }
  return (
  <div className="App">
    <Navigation></Navigation>
    <main>
      <div className="container">
        <Cards/>
        <Sidebar></Sidebar>
      </div>
    </main>
    </div>)
  
}

export default App;
