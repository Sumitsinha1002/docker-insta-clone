
import './App.css';
import React,{useEffect} from 'react'
import Header from './Components/Header';
import Post from './Components/Post';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyle = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  
  const[post,setPost]=React.useState([
{
  username:"sujit7sinha",
  imageURL:"https://cdn.pixabay.com/photo/2015/05/29/19/17/still-life-789624__480.jpg",
  caption:"Nature!!!!"
},
{
  username:"sumitsinha7",
  imageURL:"https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_1280.jpg",
  caption:"WoooW!!"
},
{
  username:"Raj",
  imageURL:"https://cdn.pixabay.com/photo/2020/08/04/13/39/street-5462881_1280.jpg",
  caption:"Everything"
},
{
  username:"Cage111",
  imageURL:"https://cdn.pixabay.com/photo/2016/11/22/23/44/buildings-1851246_1280.jpg",
  caption:"Lux"
}
  ])

  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState('');
  const [caption, setCaption] = React.useState('');


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleuserName=(e)=>{
setName(e.target.value);
  }

  const handleImage=(e)=>{
setImage(e.target.value);
  }

  const handleCaption=(e)=>{
setCaption(e.target.value);
  }

  const handleNewpost=()=>{
    setOpen(false);
    setPost([...post,{username:name,imageURL:image,caption:caption}])
    console.log(post);
  }

  return (
    <div className="App">
      <div className="app_header">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram-logo"></img>
            <button className="button_add_post"onClick={handleOpen}>Add Post11</button>
        </div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <label>Username:-<input onChange={handleuserName}></input></label><br/>
            <label>Image URL:-<input onChange={handleImage}></input></label><br />
            <label>Caption:-<input onChange={handleCaption}></input></label><br />
            <button onClick={handleNewpost}>Submit Post</button>
            
          </div>
        </Fade>
      </Modal>

      {post.map((item,index)=>{
       return <Post key={index} username={item.username} imageURL={item.imageURL} caption={item.caption}/>
      })}
     
      
    </div>
  );
}

export default App;
