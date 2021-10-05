import styled from "styled-components";

export const UploaderContainer = styled.div`
  margin-top: 24px;
`;

export const UploaderUp = styled.div`
  height: 100%;
`;

export const UploaderBtn = styled.div`
  cursor: pointer;
  text-align: center;
`;

export const UploaderCardBefore = styled.div`
  border-radius: 8px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: background 0.15s ease-in-out 0s;
  width: 260px;
  height: 458px;
  border: 2px dashed rgba(22, 24, 35, 0.2);
  box-sizing: border-box;
`;

export const ImageUploader = styled.img`
  width: 40px;
  height: 29px;
`;

export const TextMainUploader = styled.div`
  font-family: proxima-semibold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-size: 18px;
  line-height: 25px;
  font-weight: 600;
  text-align: center;
  color: rgb(22, 24, 35);
  margin-top: 24px;
`;

export const TextSubUploader = styled.div`
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(22, 24, 35, 0.75);
  margin-top: 4px;
  margin-bottom: 24px;
`;

export const TextInfoVideoUploader = styled.div`
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(22, 24, 35, 0.5);
  list-style: none;

  > div {
    margin-bottom: 6px;
  }
`;

export const FileSelectButton = styled.button`
  margin-top: 32px;
  min-width: 164px;
  height: 36px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  background-color: #fe2c55;
  color: #fff;
  border: none;
  display: flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-family: ProximaNova,system-ui;
  padding: 6px 8px;
  user-select: none;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
`;
