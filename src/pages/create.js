import Header from '../components/header'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {connect} from 'react-redux'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {useState,forwardRef} from 'react'
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {sections} from '../categories'
import {addNewPost, setNewPost} from '../actions/postActions'
import {useNavigate} from 'react-router-dom'



function Create(props){
    const [title,setTitle]=useState("");
    const [photo,setPhoto]=useState("");
    const [content,setContent]=useState("");
    const [category,setCategory]=useState();
    const [error,setError]=useState();
    const Navigate=useNavigate();
    const onChangeHandler=(evt)=>{
        let target=evt.target.id;
        let catTarget=evt.target.name;
        if(target==="Title") setTitle(evt.target.value);
        else if(target==="Photo") setPhoto(evt.target.value);
        else if(target==="Content") setContent(evt.target.value);
        else if(catTarget==="Category") setCategory(evt.target.value);
    }
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    const onClickHandler=()=>{
        if((title&&content)&&category){
            let latestID=props.postState.allPosts.length;
        let author=props.auth.user.name
          setError();
          let post={
              id:latestID,
              Author:author,
              likes:"0",
              category:category,
              Title:title,
              Photo:photo,
              Content:content,
          }
          props.setNewPost(post);
          Navigate('/');
          
        }else{
            setError('Please fill all fields')
        }
    }
 
    return(<Container maxWidth="lg">
    <Header  selected={true} user={props.auth.user} title="Hackathon" />
    <Grid 
    lineHeight="8px"
      justifyContent="center"
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
        {error&&<Alert severity="error">{error}</Alert>}
         <TextField 
       sx={{marginBottom:"14px" ,color:"#f48122"}}
          id="Title"
          onChange={(evt=>onChangeHandler(evt))}
          fullWidth
          label="Title"
          multiline
          value={title}
          maxRows={2}
          variant="standard"
        />
        <FormControl variant="standard" sx={{  minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          id="Category"
          name="Category"
          sx={{marginBottom:"14px" ,color:"#f48122"}}
          labelId="demo-simple-select-standard-label"
          value={category}
          label="Category"
          onChange={(evt=>onChangeHandler(evt))}
          >
             <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {
            sections.map((section)=><MenuItem value={section.title}>{section.title}</MenuItem>)
        }
            
        </Select>
        </FormControl>
        <TextField 
       sx={{marginBottom:"14px" ,color:"#f48122"}}
       id="Photo"
         onChange={(evt=>onChangeHandler(evt))}
         fullWidth
          label="Photo URL"
          multiline
          value={photo}
          maxRows={2}
          variant="standard"
        />
        <TextField
       sx={{marginBottom:"14px" ,color:"#f48122"}}
       id="Content"
         onChange={(evt=>onChangeHandler(evt))}
         fullWidth   
         label="Content"
         multiline
         value={content}
         rows={10}
         variant="standard"
        />
        <Button onClick={onClickHandler} sx={{color:"#f48122"}}>Add Blog</Button>
    </Grid>
    </Container>
    )

}

const mapStateToProps=(state)=>({
    postState:state.postsReducer,
    auth:state.authReducer
})

const mapDispatchToProps=dispatch=>({
   setNewPost:(post)=>dispatch(addNewPost(post)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(Create)