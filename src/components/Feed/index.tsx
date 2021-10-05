import React from 'react';
import PostCard from '../PostCard';

interface IProps {
  posts: []
}

const Feed: React.FC<IProps> = ({posts}) =>  {
  return (
    <>
      {posts.map((post, index) => (
        <PostCard key={index} post={post}>
        </PostCard>
      ))}
    </>
  );
}

export default Feed;
