import styled from "styled-components";

export const DiscoverTitle = styled.div`
  font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
  font-weight: 600;
  padding-bottom: 16px;
  font-size: 13px;
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
    font-size: 13px;
    line-height: 18px;
    color: rgba(22, 24, 35, 0.75);
  }
`;
