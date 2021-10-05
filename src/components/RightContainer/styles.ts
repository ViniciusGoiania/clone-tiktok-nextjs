import styled from "styled-components";

export const ConfigContainer = styled.div`
  transform: translateY(-40px);
  position: fixed;
  right: 24px;
  bottom: -32px;
  width: 50px;
  transition: all 500ms ease 0s;
  z-index: 7;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const AppPromotion = styled.div`
  margin-bottom: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > span {
    position: relative;
    transform: scale(1);
    margin: 0px;
    padding: 0px 8px;
    min-width: 71px;
    height: 30px;
    background: rgb(255, 255, 255);
    border: 1px solid rgba(22, 24, 35, 0.12);
    box-shadow: rgb(0, 0, 0, 0.6) 0px 2px 8px;
    border-radius: 52px;
    cursor: pointer;
    line-height: 30px;
    font-family: proxima-bold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: rgba(22, 24, 35, 0.75);
    white-space: nowrap;
  }
`;

export const ToTop = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  box-shadow: rgb(0, 0, 0, 0.6) 0px 2px 8px;
  background: url(https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/to-top-icon-12ebc24cab2f8b586e3286930a4e00f4.svg) center center / contain no-repeat transparent;
  cursor: pointer;
`;
