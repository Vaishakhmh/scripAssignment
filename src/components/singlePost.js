

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Chip from '@mui/material/Chip';

function Main(props) {
  const { post } = props;

  return (
    <React.Fragment>
    <Grid
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        minHeight:"250px",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.Photo})`,
      }}
    >
      </Grid>
          {<img style={{ display: 'none' }} src={post.Photo}  />}
          <Chip  sx={{backgroundColor:"#f48122" }} label={post.category} />
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {post.Title}
      </Typography>
      <Divider />
        <Typography variant="body1" className="markdown">
          {post.Content}
        </Typography>
        <Divider />
       <Typography
      variant="h4"
      color="#f48122"
      >
         <FavoriteRoundedIcon fill/>
         {post.likes}
       </Typography>
    </Grid>
    </React.Fragment>
  );
}


export default Main;