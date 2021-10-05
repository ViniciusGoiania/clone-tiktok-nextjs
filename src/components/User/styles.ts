import styled from "styled-components";

export const UserItem = styled.a`
  display: block;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;

  &:hover {
    background: rgba(22, 24, 35, 0.06);
  }
`;

export const UserItemInner = styled.span`
  height: 48px !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
  border-radius: 4px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 8px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background 200ms ease-in-out 0s;
`;

export const UserAvatar = styled.div`
  border-radius: 50%;
  width: 32px !important;
  height: 32px !important;
`;

export const ImageWrap = styled.div`
  position: relative;
  cursor: pointer;
`;

export const TiktokAvatar = styled.span`
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
    object-fit: cover;
  }
`;

export const UserInfos = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-pack: start !important;
  justify-content: flex-start !important;
  height: 48px !important;
  padding-left: 0 !important;
`;

export const UserTitle = styled.div`
  font-family: sofiapro-bold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 700;
  color: rgb(22, 24, 35);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 22px !important;
  margin-top: 6px !important;
  font-size: 16px !important;
  line-height: 22px !important;
  margin: 0;

  > h4 {
    margin-right: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:  ellipsis;
    max-width: 260px !important;
    margin: 0;
  }
`;

export const UserDesc = styled.p`
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
