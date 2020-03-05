import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Larissa Alves",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Larissa Alves",
              avatar: "https://i.pravatar.cc/150?img=1"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 3,
            author: {
              name: "Cleber",
              avatar: "https://i.pravatar.cc/150?img=12"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Leonardo Saglia",
          avatar: "https://i.pravatar.cc/150?img=12"
        },
        date: "05 Mar 2020",
        content: "Foco",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            content: "Conteúdo do comentário"
          },
        ]
      }
    ]
  };

  render() {
    console.log(this.state.posts)
    return (
      <>
        {this.state.posts.map(post => (
          <PostItem
            key={post.id}
            {...post}
          />
        ))}
      </>
    )
  }
}

export default PostList;
