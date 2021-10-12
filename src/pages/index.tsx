import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import {openDB} from '../lib/openDB';

interface IProps {
  posts: []
}

const Home: React.FC<IProps> = ({posts}) => (
    <Layout>
      <Feed posts={posts} />
    </Layout>
  )

export const getServerSideProps: GetServerSideProps = async () => {
  const db = await openDB();
  const data = await db.collection('feed').find().toArray();

  // const data = [
  //   {
  //     id: 1,
  //     author: {id: 1, avatar: '/images/avatar-feed.png', name: 'realname', username: 'nickname'},
  //     description: 'descricao qualquer pra colar aqui seja la o que for ',
  //     songName: 'teste de descricao - do som blabla',
  //     videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  //     likes: 245,
  //     comments: 198,
  //     replies: 65
  //   },
  //   {
  //     id: 2,
  //     author: {id: 1, avatar: '/images/avatar-feed.png', name: 'realname', username: 'nickname'},
  //     description: 'descricao qualquer pra colar aqui seja la o que for2 ',
  //     songName: 'teste de descricao - do som blabla2',
  //     videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  //     likes: 245,
  //     comments: 198,
  //     replies: 65
  //   }
  // ];

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data))
    }, 
  }
}

export default Home;
