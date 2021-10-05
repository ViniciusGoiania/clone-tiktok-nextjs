import React from 'react';
import { UserItem, UserItemInner, UserAvatar, ImageWrap, TiktokAvatar, UserInfos, UserTitle, UserDesc } from './styles';

const staticRecommendForYou = [
  {
    avatar: "/images/injr-tiktok.jpeg",
    usertitle: "intitutoneymarjr",
    userDescription:"INJr",
  },
  {
    avatar: "/images/mari-tiktok.jpeg",
    usertitle: "marimariamakeup",
    userDescription:"Mari Maria Makeup",
  },
  {
    avatar: "/images/isis-tiktok.jpeg",
    usertitle: "isisvalverde",
    userDescription:"isis valverde",
  },
  {
    avatar: "/images/felipeneto-tiktok.jpeg",
    usertitle: "felipeneto",
    userDescription:"Felipe Neto",
  },
  {
    avatar: "/images/anitta-tiktok.jpeg",
    usertitle: "anitta",
    userDescription:"Anitta",
  },
];

const User: React.FC = () => {
  return(
    <>
    {staticRecommendForYou.map((user, index) =>(
    <UserItem key={index}>
      <UserItemInner>
        <UserAvatar>
          <ImageWrap>
            <TiktokAvatar>
              <img src={user.avatar} alt="" />
            </TiktokAvatar>
          </ImageWrap>
        </UserAvatar>
        <UserInfos>
          <UserTitle>
            <h4>{user.usertitle}</h4>
          </UserTitle>
        <UserDesc>{user.userDescription}</UserDesc>
        </UserInfos>
      </UserItemInner>
    </UserItem>
    ))}
   </>
  );
}

export default User;

