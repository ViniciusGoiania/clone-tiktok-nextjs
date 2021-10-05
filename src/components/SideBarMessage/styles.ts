import styled from "styled-components";

export const Container = styled.div`
  width: 356px;
  height: 100%;
  flex-shrink: 0;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgb(0, 0, 0, 0.06) 0px 2px 8px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
`;

export const ListWrapperHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 16px 0px 24px;
  box-sizing: border-box;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;

  > h3 {
    font-family: sofiapro-bold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
    font-weight: 700;
    max-width: 240px;
    font-size: 24px;
    color: rgb(0, 0, 0);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }

  > img {
    display: block;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

export const ListContent = styled.div`
  overflow: auto;
  height: 100%;
`;

export const MessageContainer = styled.div`
  height: 100%;
  padding-right: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  perspective: 1px;
  perspective-origin: right top;
  transform-style: preserve-3d;
`;

export const MessageContent = styled.div`
  height: 100%;
`;

export const EmptyList = styled.div`
  background: rgba(22, 24, 35, 0.03);
  padding: 0px 16px;
  height: 72px;
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 400;
  font-size: 14px;
  line-height: 72px;
`;

export const ScrollbarDiv = styled.div`
  height: 0px;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1) scale(0) translateZ(1px) translateZ(-2px);
  position: absolute;
  padding: 0 4px;
  top: 0;
  right: 0;
  transform-origin: right top;
  transition: opacity .5s;
  opacity: 0;

  > div {
    width: 6px;
    height: 100%;
    border-radius: 3px;
    background: rgba(22, 24, 35, 0.06);
  }
`;
