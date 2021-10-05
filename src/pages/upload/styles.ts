import styled from "styled-components";

export const DesktopContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: #f8f8f8;
`;

export const MainBody = styled.div`
  max-width: 1100px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  display: flex;
  flex: 1 1 auto;
  padding-top: 60px;
`;

export const LayoutBg = styled.div`
  flex: unset;
  background-color: rgb(248, 248, 248);
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0px auto;
  flex: 1 1 0%;
  box-shadow: rgb(0, 0, 0, 0.06) 0px 2px 8px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  padding: 24px 56px;
`;

export const Title = styled.div`
  font-family: sofiapro-bold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-size: 22px;
  line-height: 32px;
  font-weight: bold;
  color: rgb(22, 24, 35);
`;

export const SubTitle = styled.div`
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: rgb(138, 139, 145);
  margin-top: 2px;
`;

export const Contents = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 130px;
`;
