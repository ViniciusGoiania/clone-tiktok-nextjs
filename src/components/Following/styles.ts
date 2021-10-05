import styled from "styled-components";

export const DivUserFollowingEmpty = styled.div`
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
    font-size: 13px;
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

export const UserListFollowing = styled.div`
  padding: 0 0 16px;
  width: 100%;
  position: relative;
  box-sizing: border-box;

  &::before {
    left: 8px;
    right: 8px;
    top: 0;
    content: "";
    height: 1px;
    background: rgba(22, 24, 35, 0.12);
    transform: scaleY(0.5);
  }
`;

export const UserListHeader = styled.div`
  font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
  font-weight: 600;
  padding: 16px 8px 8px 8px;
  margin-bottom: 0;
  font-size: 13px;
  line-height: 20px;
  box-sizing: border-box;
  text-align: left;
  color: rgba(22, 24, 35, 0.75);
`;

export const SeeMore = styled.p`
  float: right;
  color: #fe2c55;
  cursor: pointer;
  margin: 0;
`;
