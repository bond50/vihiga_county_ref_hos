import React from 'react';
import {Card, Grid, Icon, Image} from "semantic-ui-react";
import avatar from '../../assets/avatar/maleavatar.jpg'

const Posts = ({posts}) => {
        console.log(posts)
        if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
        return (
            <Grid container >
                {
                    posts.map(post => (
                            <Grid.Column key={post.id} width={4}>
                                <Card>
                                    <Image src={avatar} wrapped ui={false}/>
                                    <Card.Content>
                                        <Card.Header>{post.title.substr(0, 50)}...</Card.Header>
                                        <Card.Meta>Joined in 2016</Card.Meta>
                                        <Card.Description>
                                            {post.excerpt.substr(0, 30)}...
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a href='/'>
                                            <Icon name='user'/>
                                            {post.content.substr(0, 50)}...
                                        </a>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                    ))
                }
            </Grid>
        );
    }
;

export default Posts;