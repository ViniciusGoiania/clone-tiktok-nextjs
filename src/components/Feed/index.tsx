/* eslint-disable react/no-array-index-key */
import React from 'react';
import PostCard from '../PostCard';

interface IProps {
  posts: []
}

const Feed: React.FC<IProps> = ({posts}) =>  (
    <>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </>
  )

export default Feed;
