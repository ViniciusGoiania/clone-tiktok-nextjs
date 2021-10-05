import styled from 'styled-components';

export const FeedContainer = styled.div`
  width: 692px;
  max-width: 692px;
  position: relative;
  padding: 20px 0px;
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`;

export const AvatarFeed = styled.a`
  float: left;
  position: relative;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  > span {
    cursor: unset;
    width: 56px;
    height: 56px;
    border-color: rgba(22, 24, 35, 0.12);
    border-width: 0.5px;
    z-index: 10;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-feature-settings: "tnum";
    position: relative;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    line-height: 32px;
    border-radius: 50%;

    > img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
`;

export const FeedItemContent = styled.div`
  position: relative;
  margin-left: 68px;
`;

export const AuthorInforContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-flow: row wrap;
  cursor: default;
  display: flex;
  align-items: flex-start;
  margin-right: 150px;

  > a {
    color: inherit;
    text-decoration: none;

    > h3 {
      margin: 0;
    }

    > h4 {
      margin-left: 5px;
      margin-bottom: 0;
      margin-right: 0;
      margin-top: 0;
      line-height: 28px;
      font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
      font-weight: 400;
      font-size: 13px;
    }
  }
`;

export const MetaCaption = styled.div`
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-size: 15px;
  line-height: 22px;
  color: rgb(18, 18, 18);
  flex: 0 0 auto;
  font-weight: normal;
  margin-bottom: 0px;
  word-break: break-word;
  margin-right: 150px;

  > a {
    font-family: proxima-semibold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
    font-weight: 600;
    color: rgb(18, 18, 18);
    text-decoration: none;
  }

  > strong {
    font-weight: normal;
  }
`;

export const FollowWrapperButton = styled.div`
  position: absolute;
  right: 0px;
  top: 8px;
  overflow: hidden;

  > button {
    font-family: proxima-semibold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    min-width: 88px;
    padding: 0px 10px;
    height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #fe2c55;
    color: #fe2c55;
  }
`;

export const MusicInfo = styled.div`
  margint-top: 4px;
  margin-bottom: 12px;
  max-width: 524px;
  position: relative;
  overflow: hidden;

  > h4 {
    margin: 0;

    > a {
      display: inline-block;
      font-size: 16px;
      line-height: 22px;
      height: 22px;
      color: rgb(22, 24, 35);
      font-family: sofiapro-bold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
      font-weight: 700;
      position: relative;
      overflow: hidden;
      text-decoration: none;

      > div {
        font-family: proxima-semibold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
        font-weight: 600;
        display: inline-block;
        font-size: 15px;
        line-height: 22px;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 4px;

        > img {
          transform: translateY(4px);
          margin-right: 5px;
        }
      }
    }
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DivVideo = styled.div`
  width: calc(0.56 * (450px + ((100vw - 768px) / 1152) * 100));
  height: calc(450px + ((100vw - 768px) / 1152) * 100);
  position: relative;
`;

export const DivActionBar = styled.div`
  position: absolute;
  right: -64px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const BarItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 48px;
  font-size: 13px;

  > strong {
    display: inline-block;
    text-align: center;
    margin-top: 6px;
    color: rgba(22, 24, 35, 0.75);
    font-family: proxima-semibold, PingFangSC, sans-serif !important;
    font-weight: 600 !important;
    font-size: 13px !important;
    line-height: 17px !important;
    padding: 0px 7px 0px 8px !important;
  }  
`;

export const BarItemImage = styled.div`
  background-repeat: no-repeat;
  margin-top: 8px;
  background-color: rgba(22, 24, 35, 0.06);
  padding: 12px;
  border-radius: 100%;
  margin-left: 0px;
  cursor: pointer;
  width: 24px !important;
  height: 24px !important;
  background-size: 24px !important;
  background-position: center center !important;
`;

export const ImageCard = styled.div`
  border-radius: 4px;
  background-color: black;
  background-size: calc(0.56 * (450px + ((100vw - 768px) / 1152) * 100));
  transform: translateZ(0px);
  mask-image: -webkit-radial-gradient(center, circle cover, white 100%, black 100%);
  width: 100%;
  height: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  overflow: hidden;
`;

export const VideoCardColumn = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const VideoItem = styled.video`
  width: calc(0.56 * (450px + ((100vw - 768px) / 1152) * 100));
  display: block;
  height: 100%;
  object-fit: cover;
`;

export const ToggleIcon = styled.div`
  bottom: 28px;
  left: 12px;
  top: unset;
  right: unset;
  position: absolute;
  width: 40px;
  height: 40px;
  background: center center / contain no-repeat transparent;
  z-index: 10;

  > img {
    transform: translate(10px, 10px);
  }
`;
