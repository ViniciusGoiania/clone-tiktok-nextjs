import styled from "styled-components";

export const DivInherited = styled.div`
  position: relative;
  cursor: pointer;
  height: 20px;
  margin-left: 16px;
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
  transition: all .3s ease-in-out;
  
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
      transition: all .3s ease-in-out;
      text-decoration: none;

      > i {
        transition: all .3s ease-in-out;
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
