import styled from "styled-components";

export const DesktopContainer = styled.div`
  background: rgb(248, 248, 248);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const MainBodyInbox = styled.div`
  background: rgb(248, 248, 248);
  max-width: 1100px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  padding-top: 60px;
`;

export const SharedLayout = styled.div`
  flex: unset;
  padding: 0px;
  max-width: 100% !important;
  margin: auto;
  display: flex;
  flex-direction: row;
`;

export const SharedContent = styled.div`
  padding-right: 0px !important;
  box-sizing: content-box;
  width: 100%;
  height: calc((100vh - 70px) - 16px);
  padding: 16px 0px 10px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const SharedLayoutMessage = styled.main`
  flex: 1 1 auto;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  min-height: 490px;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: row !important;
`;
