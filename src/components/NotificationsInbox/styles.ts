import styled from "styled-components";

interface IProps {
  active?: boolean;
}

export const MainContainer = styled.div`
  display: block;
  opacity: 1;
  position: absolute;
  width: 376px;
  height: 640px;
  top: 45px;
  right: -66px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 -4px 32px rgb(0, 0, 0, 0.1);
  transition: all .2s linear;
  z-index: 10;

  > img {
    left: auto;
    right: 64px;
    top: -8px;
    position: absolute;
    width: 30px;
    height: 8px;
  }
`;

export const Inbox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const InboxContentHeader = styled.div`
  padding-left: 16px;
`;

export const InboxContentNotification = styled.div`
  font-family: "sofiapro-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
  font-weight: 700;
  font-size: 23px;
  padding: 24px 0 8px;
`;

export const SpanContentWrap = styled.span<IProps>`
  display: inline-block;
  line-height: 20px;
  padding: 0 8px;
  border-radius: 12px;
  background: ${props => props.active ? '#161823' : '#f1f1f1' } ;
  font-family: "proxima-semibold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.active ? '#fff' : '#161823' } ; 
  margin-right: 8px;
  margin-bottom: 12px;
  transition: ${props => props.active ? 'all 300ms' : ''}

  &:hover {
    background: rgba(0, 0, 0, 0.15)
  }
`;

export const SpanContentActive = styled(SpanContentWrap)`
  transition: all 300ms;
  background: #161823;
  color: #fff;
`;

export const GroupWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  margin-top: 8px;

  &:nth-child(1) {
    background: blue;
  }
`;

export const NoticeList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const InboxEmpty = styled.div`
  padding-top: 94px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-right: 32px;
  padding-left: 32px;

  > h4 {
    margin-top: 20px;
    font-family: proxima-semibold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
    font-weight: 600;
    font-size: 16px;
    color: rgb(22, 24, 35);
    line-height: 20px;
    margin-bottom: 0px;
  }

  > p {
    font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
    font-weight: 400;
    margin: 12px 0px;
    font-size: 13.5px;
    line-height: 17px;
    color: rgba(22, 24, 35, 0.75);
    text-align: center;
  }
`;
