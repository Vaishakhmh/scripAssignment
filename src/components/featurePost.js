
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedPost(props) {
  const { post } = props;
  const content=post.Content.substring(0,130);
  const Title=post.Title.substring(0,50);
  return (
    <Grid item xs={12} md={10}>
      <CardActionArea  onClick={()=>props.onClickHandle(post)} sx={{minHeight:"120px"}} >
        <Card  sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {Title+"..."}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.Author}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {content+"..."}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.Photo}
            alt={post.Author}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;