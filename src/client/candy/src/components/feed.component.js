import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './post.component';
import NavigationBar from './navigation.component';

const Feed = () => (<>
        <Grid
            container
            spacing={0}
            direction="row"
            >
            <Grid item lg={4} md={6} sm={12} xs={12} >
                <Post />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12} >
                <Post />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12} >
                <Post />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12} >
                <Post />
            </Grid>
        </Grid>
        <NavigationBar />
    </>);

export default Feed;