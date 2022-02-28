import {useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../components/MainfeaturePost';
import FeaturedPost from '../components/featurePost';
import {getAllPosts,getFeaturedPost} from '../actions/postActions'
import {connect} from 'react-redux'
import {sections} from '../categories'
import Header from '../components/header'
import Main from '../components/singlePost'
 function Home(props) {
     const {postState}=props;
     const [singleBlog,setSingleBlog]=useState(false);
     const [selected,setSelected]=useState();
     console.log(postState);
    useEffect(()=>{
       props.getAllPosts();
       props.getFeaturedPost();
    },[])
    
    const singlePostHandle=(post)=>{
      if(post){
         setSelected(post);
         setSingleBlog(true);
      }else{
        setSelected();
        setSingleBlog(false);
      }
    }

  return (
      <Container maxWidth="lg">
       <Header addFilter={props.getAllPosts} onClick={singlePostHandle} selected={singleBlog} user={props.auth.user} title="Hackathon"  sections={sections} />
       {singleBlog?<Main post={selected} /> : postState.allPosts.length>0?<main>
          <MainFeaturedPost post={postState.featuredPost.Title?postState.featuredPost:postState.allPosts[0]} />
          <Grid justifyContent="center" container spacing={4}>
            {postState.allPosts.map((post) => (
              <FeaturedPost onClickHandle={singlePostHandle} key={post.id} post={post} />
            ))}
          </Grid>
        </main>:<div>No Posts Yet</div>}
      </Container>
  );
}

const mapStateToProps=(state)=>({
    postState:state.postsReducer,
    auth:state.authReducer
})

const mapDispatchToProps=dispatch=>({
    getAllPosts:(filter)=>dispatch(getAllPosts(filter)),
    getFeaturedPost:()=>dispatch(getFeaturedPost())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)