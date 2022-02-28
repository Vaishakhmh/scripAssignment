import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar/Avatar';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom'


function Header(props) {
  const Navigate=useNavigate();
  const { sections, title } = props;
  const [open, setOpen] = React.useState(false);
  const [filter,setFilter]=React.useState('');
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    props.addFilter();
  };
  const action = (
    <React.Fragment>
      <Grid sx={{backgroundColor:"#f48122"}} >
      <Button  size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      </Grid>
    </React.Fragment>
  );

  const onClickCreate=()=>{
     Navigate('/create')
  }

  return (
    <React.Fragment>
      { !props.selected && 
       <Snackbar
        open={open}
        onClose={handleClose}
        message={`${filter} filter added`}
        action={action}
        sx={{backgroundColor :"#f48122"}}
      />
      }
      <Toolbar  sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {!props.selected && <Typography
        component="h2"
        variant="h5"
        color="#f48122"
        noWrap
        onClick={onClickCreate}
        ><AddIcon/>create</Typography>}
          {props.selected && <Button sx={{color:"#f48122"}} onClick={()=>props.onClick()} >home</Button>
         }
        <Typography
          component="h2"
          variant="h5"
          color="#f48122"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <Avatar />
        </IconButton>
        <Typography
         component="h2"
         variant="h5"
         color="#f48122"
         >
            {props.user.name}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {!props.selected && sections.map((section) => (
          <Button
            onClick={()=>{setFilter(section.title);handleClick(); props.addFilter(section)}}
            color="#f48122"
            key={section.title}
            variant="body2"
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;