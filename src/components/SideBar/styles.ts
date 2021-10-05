import styled from "styled-components";

interface IProps {
  active?: boolean;
}

export const SidebarContainer = styled.div`
  flex: 0 0 356px !important;
  position: relative;
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  left: unset;
  width: 340px !important;
  padding: 0 8px 0 8px !important;
  top: 60px;
  bottom: 0;
  z-index: 11;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  perspective: 1px;
  perspective-origin: right top;
  transform-style: preserve-3d;

  &::-webkit-scrollbar {
    height: 0;    
  } 
`;

export const ScrollWrapper = styled.div`
  height: 100%;
`;

export const ScrollWrapperContent = styled.div`
  padding-top: 20px;
  width: 340px !important;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  -webkit-box-align: stretch;
  align-items: stretch;
  height: 100%;
`;

export const UpperContents = styled.div`
`;

export const NavWrapper = styled.div`
  padding: 0;
  margin-bottom: 8px;  
`;

export const NavItem = styled.a<IProps>`
  padding: 8px;
  border-radius: 4px;
  position: relative;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  transition: background 200ms ease-in-out 0s;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  height: 48px;

  > img {
    flex: 0 0 32px !important;
    width: 32px !important;
    height: 32px !important;
    margin: 0px !important;
    content: ${props => props.active ? 'url("/images/home-nav-color.svg")' : ''};
  }

  > h2 {
    font-family: "proxima-bold", Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    margin-left: 8px;
    color: ${props => props.active ? '#fe2c55' : 'black'};
  }
`;

export const UserList = styled.div`
  padding: 0 0 16px;
  width: 100%;
  position: relative;
  box-sizing: border-box;

  &::before {
    left: 8px;
    right: 8px;
    top: 0px;
    content: "";
    position: absolute;
    height: 1px;
    background: rgba(22, 24, 35, 0.12);
    transform: scaleY(0.5);
  }

  &::after {
    display: none;
    bottom: 0px;
  }
`;

export const UserListHeader = styled.div`
  font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
  font-weight: 400;
  padding: 16px 8px 8px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
  text-align: left;
  color: rgba(22, 24, 35, 0.75);

  > p {
    float: right;
    color: #fe2c55;
    cursor: pointer;
    margin: 0;
  }
`;

export const UserItem = styled.a`
  display: block;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;

  &:hover {
    background: rgba(22, 24, 35, 0.06);
  }
`;

export const UserItemSpan = styled.span`
  height: 48px !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
  border-radius: 4px;  
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background 200ms ease-in-out 0s;
`;

export const UserAvatarList = styled.div`
  border-radius: 50%;
  width: 32px !important;
  height: 32px !important;

  > div {
    position: relative;
    cursor: pointer;

    > span {
      cursor: unset;
      width: 32px !important;
      height: 32px !important;
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
  }
`;

export const UserInfoList = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-pack: start !important;
  justify-content: flex-start !important;
  height: 48px !important;
  padding-left: 0px !important;
`;

export const UserTitle = styled.p`
  font-family: sofiapro-bold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 700;
  color: rgb(22, 24, 35);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 22px !important;
  margin-top: 6px !important;
  font-size: 15px !important;
  line-height: 22px !important;
  margin: 0;

  > h4 {
    margin-right: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 260px !important;
    margin: 0;
  }
`;

export const UserDesc = styled.div`
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 260px !important;
  height: 15px !important;
  font-size: 12px !important;
  line-height: 15px !important;
  color: rgba(22, 24, 35, 0.75) !important;
  margin: 0;
`;

export const DivSeeAll = styled.div`
  height: 20px;
  margin-top: 8px;
  margin-bottom: 0;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;

  > p {
    font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
    font-weight: 600;  
    font-size: 14px;
    line-height: 20px;
    color: #fe2c55;
  }
`;

export const DivUserFollowing = styled.div`
  padding: 0 0 16px;
  position: relative;
  margin-top: 0;

  &::before {
    left: 8px;
    right: 8px;
    content: "";
    position: absolute;
    height: 1px;
    background: rgba(22, 24, 35, 0.12);
    transform: scaleY(0.5);
    top: 0;
  }

  > div {
    font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
    font-weight: 600;
    padding: 16px 8px 8px 8px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
    text-align: left;
    color: rgba(22, 24, 35, 0.75);
  }

  > p {
    margin: 0;
    font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
    font-weight: 400;
    padding: 0 8px 0 8px;
    font-size: 14px;
    line-height: 20px;
    color: rgba(22, 24, 35, 0.5);
  }
`;

export const DiscoverTitle = styled.div`
  font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
  font-weight: 600;
  padding-bottom: 16px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(22, 24, 35, 0.75);
`;

export const DiscoverList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > a {
    display: block;
    width: fit-content;
    max-width: 100%;
    color: inherit;
    text-decoration: none;
  }
`;

export const DicoverListContainer = styled.div`
  padding: 16px 8px 8px 8px;
  position: relative;
  box-sizing: border-box;
  width: 100%;

  &::before {
    left: 8px;
    right: 8px;
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    background: rgba(22, 24, 35, 0.12);
    transform: scaleY(0.5);
  }
`;

export const DiscoverItemContainer = styled.div`
  margin-right: 8px;
  display: flex;
  box-sizing: border-box;
  width: fit-content;
  max-width: 100%;
  height: 24px;
  margin-bottom: 12px;
  padding: 3px 10px;
  border: 1px solid rgba(22, 24, 35, 0.12);
  border-radius: 12px;
  background: rgb(255, 255, 255);
  transition: all 200ms ease 0s;

  > div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  > span {
    font-family: proxima-regular,Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
    font-weight: 400;
    padding-left: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    line-height: 18px;
    color: rgba(22, 24, 35, 0.75);
  }
`;

export const DivBottomWrapper = styled.div`
  width: auto;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 24px;
  box-sizing: border-box;
  color: rgba(22, 24, 35, 0.5) !important;

  > span {
    font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
    font-weight: 600;
    margin-bottom: 12px;
    display: inline-block;
    margin-right: 6px;
    margin-top: 5px;
    font-size: 12px;
    line-height: 12px;
    color: rgba(22, 24, 35, 0.5);
  }

  &::before {
    left: 8px;
    right: 8px;
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    background: rgba(22, 24, 35, 0.12);
    transform: scaleY(0.5);
  }
`;

export const DivLinkWrapper = styled.div`
  margin-bottom: 8px;

  > a {
    display: inline-block;
    margin-right: 6px;
    margin-top: 5px;
    font-size: 12px;
    line-height: 12px;
    color: rgba(22, 24, 35, 0.5);
    text-decoration: none;
    font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
    font-weight: 600;  
  }
`;

export const ScrollBar = styled.div`
  height: 188.334px;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1) scale(2.39468) translateZ(-1.39468px) translateZ(-2px);
  position: absolute;
  padding: 0 4px;
  top: 0;
  right: 0;
  transform-origin: right top;
  transition: opacity .5s;
  opacity: 0;
`;

export const ScrollBarThumb = styled.div`
  width: 6px;
  height: 100%;
  border-radius: 3px;
  background: rgba(22, 24, 35, 0.6);
`;
