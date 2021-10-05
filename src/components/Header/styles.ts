import styled from "styled-components";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid rgba(34, 90 , 89, 0.2);
  z-index: 1000;
  display: flex;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 100%;
  padding: 0;
  max-width: 1100px;
  padding-left: 20px;
  padding-right: 24px;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  justify-content: flex-start;
`;

export const Logo = styled.img`
  display: inline;
  cursor: pointer;
  height: 42px;
`;

export const DivSearch = styled.div`
  display: flex;
  align-items: center;  
  width: 361px;
  background-color: rgba(22, 24, 35, 0.06);
  border-radius: 45px;
`;

export const SearchInput = styled(InputBase)`
  display: block;
  position: relative;
  width: 292px;
  margin-left: 18px;
`;

export const DividerBar = styled.div`
  height: 28px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);
`;

export const IconButtonSearch = styled(IconButton)`
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UploadDiv = styled.div`
  position: relative;
  cursor: pointer;

  > span {
    display: flex;
  }
`;

export const MessageIcon = styled.a`
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;

  > div {
    position: relative;
    width: 32px;
    height: 32px;
    margin-left: 15px;
    background-size: 32px 32px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    background-image: url("/images/message-wrapper.svg");
  }
`;

export const InboxIcon = styled.div`
  position: relative;
  margin-left: 16px;
  height: 32px;
  z-index: 10;
`;

export const InboxDiv = styled.div`
  cursor: pointer;

  > span {
    display: flex;
  }
`;

export const Icon = styled.img`
  width: 37px;
  height: 37px;
`;

export const ActionsEnterDone = styled.div`
  opacity: 1;
  position: absolute;
  z-index: 1;
  right: -14px;
  top: calc(100% + 12px);
  min-width: 200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 -4px 32px rgb(0, 0, 0, 0.1);
  visibility: hidden;

  &:hover {
    visibility: visible;
  }

  > img {
    top: -8px;
    position: absolute;
    width: 30px;
    height: 8px;
    right: 12px;
  }
`;

export const HeaderSettingWrap = styled.div`
  padding: 8px 0;
  min-width: 223px;
  
  > hr {
    margin: 8px 0;
    height: 1px;
    border: none;
    background: rgba(22, 24, 35, 0.12);
    transform: scaleY(0.5);
  }

  > div {

    > a {
      height: 40px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding: 0 16px;
      cursor: pointer;
      font-size: 15px;
      color: #161823;
      font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
      font-weight: 600;
      word-break: keep-all;
      white-space: nowrap;
      text-decoration: none;

      > i {
        margin-right: 12px;
        margin-top: 4px;
        color: #161823;
      }
    }
  }
`;

export const OptionContent = styled.div`
  height: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  font-size: 16px;
  color: #161823;
  font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
  font-weight: 600;
  word-break: keep-all;
  white-space: nowrap;
  transition: all .3s ease-in-out;
  text-decoration: none;

  > i {
    transition: all .3s ease-in-out;
    margin-right: 12px;
    margin-top: 4px;
    color: #161823;
  }
`;

export const LogoutLine = styled.hr`
  margin: 8px 0;
  height: 1px;
  border: none;
  background: rgba(22, 24, 35, 0.12);
  transform: scaleY(0.5);
`;


export const AvatarDiv = styled.div`
  height: unset;
  margin-left: 24px;
  position: relative;
  cursor: pointer;

  &:hover {
    >${ActionsEnterDone} {
      visibility: visible;
    }
  }

  > span {
    display: flex;

    > span {
      width: 32px;
      height: 32px;
      display: inline-flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      position: relattive;
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

export const SearchIconManual = styled(SearchIcon)`
  -ms-user-select: none;
  -webkit-user-select: none;
`;
