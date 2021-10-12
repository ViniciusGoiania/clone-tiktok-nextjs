import React, {useRef, useState} from 'react';
import { FeedContainer, AvatarFeed, FeedItemContent, AuthorInforContainer, MetaCaption, FollowWrapperButton,
   MusicInfo, VideoContainer, DivVideo, DivActionBar, BarItemWrapper, BarItemImage, ImageCard, VideoCardColumn, VideoItem, ToggleIcon } from './styles';

interface IAuthorProps {
  username?: string,
  name?: string,
  avatar?: string,
}
  
interface IProps {
  author?: IAuthorProps,
  description?: string,
  songName?: string,
  videoUrl?: string,
  likes?: number,
  comments?: number,
  replies?: number
}

interface IPost {
  post?: IProps
}

const PostCard: React.FC<IPost> = ({post}) => {
  const videoReft = useRef<HTMLVideoElement>(null);
  const [running, setRunning] = useState(false);

  const toggleAction = () => {
    if(videoReft?.current != null) {
      if(!running) videoReft.current.play();
      else videoReft.current.pause();

      setRunning(!running);
    }
  }


  return (
    <FeedContainer>
      <AvatarFeed>
        <span>
          <img src={post?.author?.avatar} alt="" />
        </span>
      </AvatarFeed>
      <FeedItemContent>
        <AuthorInforContainer>
          <a href="/">
            <h3>{post?.author?.username}</h3>
          </a>
          <a href="/">
            <h4>{post?.author?.name}</h4>
          </a>
        </AuthorInforContainer>
        <MetaCaption>
        <strong>{post?.description}</strong>
        <a href="/"><strong>@nomedeusuariomencionado</strong></a>
        </MetaCaption>
        <FollowWrapperButton>
          <button type="submit">Follow</button>
        </FollowWrapperButton>
        <MusicInfo>
          <h4>
            <a href="/">
              <div>
                <img src="/images/song-discover-list.svg" alt=""/>
                 {post?.songName}
              </div>
            </a>
          </h4>
        </MusicInfo>
        <VideoContainer>
          <DivVideo>
            <ImageCard>
              <VideoCardColumn>
                <VideoItem ref={videoReft} webkit-playsInline='true' loop preload='metadata'>
                  <source src={post?.videoUrl} type="video/mp4" />
                </VideoItem>
                <ToggleIcon onClick={toggleAction}>
                  <img src={running ? '/images/pause-video.svg' : '/images/play-video.svg'} alt="" />
                </ToggleIcon>
              </VideoCardColumn>
            </ImageCard>
          </DivVideo>
          <DivActionBar>
            <BarItemWrapper>
              <BarItemImage>
                <img src="/images/heart-icon.svg" alt="" />
              </BarItemImage>
              <strong>{post?.likes}</strong>
            </BarItemWrapper>
            <BarItemWrapper>
              <BarItemImage>
                <img src="/images/comment-icon.svg" alt="" />
              </BarItemImage>
              <strong>{post?.comments}</strong>
            </BarItemWrapper>
            <BarItemWrapper>
              <BarItemImage>
                <img src="/images/reply-icon.svg" alt="" />
              </BarItemImage>
              <strong>{post?.replies}</strong>
            </BarItemWrapper>
          </DivActionBar>
        </VideoContainer>
      </FeedItemContent>
    </FeedContainer>
  );
}

export default PostCard;
