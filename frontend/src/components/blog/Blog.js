import PostLoading from "../../hocs/Postloading/Postloading";
import Posts from "./Posts";
import React, {useEffect, useState} from 'react';
import {Container, Segment} from "semantic-ui-react";
import axios from "axios";
import {backEndUrl} from "../../utils/common.resource";


const Blog = () => {
    const Loading = PostLoading(Posts);
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

    useEffect(() => {
        setAppState({loading:true});
        axios.get(`${backEndUrl}/blog/`)
            .then(response =>(
                setAppState({loading: false,posts:response.data})
            ))
            .catch(error=>console.log(error))

    }, [setAppState]);
    return (
        <Segment vertical>
            <Container>
                <h1>Latest Posts</h1>
                <Loading isLoading={appState.loading} posts={appState.posts}/>
            </Container>
        </Segment>
    );
};

export default Blog;