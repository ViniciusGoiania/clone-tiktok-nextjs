import styled from "styled-components";

export const Form = styled.div`
  margin-left: 24px;
  flex: 1 1 0%;
`;

export const CaptionWrap = styled.div`
  margin-bottom: 24px;
`;

export const CaptionContainer = styled.div`
  outline-style: none;
  position: relative;
  flex: 1 1 0%;
`;

export const AnchorEntry = styled.div`  
`;

export const FormContainer = styled.div`
  outline-style: none;
  position: relative;
  width: 768px;
`;

export const TextContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

export const TitleFont = styled.span`
  font-family: proxima-semibold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
`;

export const RequireFont = styled.span`
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: rgba(22, 24, 35, 0.5);
  white-space: pre;
`;

export const CaptionText = styled.div`
  margin-top: 4px;
`;

export const CaptionTextContainer = styled.div`
  min-height: 46px;
  position: relative;
  text-align: center;
  border: 1px solid rgba(22, 24, 35, 0.12);
  border-radius: 4px;
`;

export const EditorCaption = styled.div`
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  cursor: text;
  width: 100%;
  position: relative;
  padding: 0px 80px 0px 16px;
`;
export const DrafEditorRoot = styled.div`
  position: relative;
  height: inherit;
  text-align: initial;
`;

export const DrafEditorContainer = styled.div`
  background-color: rgba(255, 255, 255, 0);
  border-left: 0.1px solid transparent;
  position: relative;
  z-index: 1;
`;

export const DrafEditorContent = styled.input`
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border-style: none;
  padding: 12px 0px;
  font-size: 16px;
  overflow: auto; 
  width: 600px;
  max-width: 600px;
  -webkit-user-modify: read-write-plaintext-only;
`;

export const DraftStyleDefault = styled.div`
  text-align: left;
  direction: ltr;
  position: relative;
  white-space: pre-wrap;  
`;

export const IconAt = styled.div`
  right: 40px;
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: 8px;
  top: 12px;
  cursor: pointer;
`;

export const IconHash = styled.div`
  right: 12px;
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: 8px;
  top: 12px;
  cursor: pointer;
`;

export const FormCoverTitle = styled.div`
  margin-top: 24px;
  font-size: 16px;
  line-height: 22px;
  font-family: proxima-semibold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 600;
  margin-bottom: 4px;
  color: rgb(0, 0, 0);
`;

export const CoverContainer = styled.div`
  position: relative;
  line-height: 0;
  padding: 6px;
  border: 1px solid rgba(22, 24, 35, 0.12);
  border-radius: 2px;
`;

export const CoverContainerInner = styled.div`
  border: 2px solid transparent;
  display: flex;
  box-sizing: border-box;
  border-radius: 2px;
`;

export const CoverCandidate = styled.div`
  background-color: rgba(22, 24, 35, 0.03);
  width: 84.2px;
  height: 150px;
  object-fit: cover;
`;

export const FormItemFlex = styled.div`
  margin-top: 24px;
`;

export const PermissionTop = styled.div`
  margin-right: 55px;
`;

export const PermissionTopTitle = styled.div`
  font-family: proxima-semibold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: rgb(0, 0, 0);
  margin-bottom: 4px;
`;

export const TikTokSelect = styled.div`
  width: 300px;
  height: 36px;
  position: relative;
  display: inline-flex;
`;

export const TikTokSelector = styled.div`
  width: 300px;
  height: 36px;
  border: 1px solid rgba(22, 24, 35, 0.12);
  background: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 7px 12px;
  box-sizing: border-box;
  display: inline-flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
`;

export const TikTokSelectorLeft = styled.div`
  max-width: 90%;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;

  > div {
    flex-shrink: 0;
  }

  > span {
    overflow: hidden;
    text-overflow: ellipsis;
    color: #161823;
    height: 22px;
    font-family: ProximaNova;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const TikTokSelectorIcon = styled.div`
  transform: rotate(0deg);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  flex-shrink: 0;
`;

export const PermissionCheckBox = styled.div`
  margin-top: 24px;
`;

export const CheckBoxTitle = styled.div`
  font-size: 16px;
  line-height: 22px;
  font-family: proxima-semibold, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 600;
  margin-bottom: 4px;
  color: rgb(0, 0, 0);
`;

export const CheckBoxContainer = styled.div`
  display: flex;
`;

export const LabelCheckBox = styled.label`
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  margin-right: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;

  > input {
    display: none;
  }

  > span {
    background: rgb(254, 44, 85);
    border: none;
    flex: 0 0 22px;
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-right: 13px;
    vertical-align: middle;
    border-radius: 2px;
    box-sizing: border-box;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 14px;
      height: 10px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -7px;
      margin-top: -5px;
      background: url("https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/checked-690bcb6139041f6e7bf0a380b2bba038.svg") center center / contain no-repeat transparent;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
`;

export const CheckboxLabel = styled.label`
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  margin-right: 32px;

  > input {
    display: none;
  }

  > span {
    flex: 0 0 22px;
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-right: 13px;
    vertical-align: middle;
    border-radius: 2px;
    background: rgb(255, 255, 255);
    border: 1.5px solid rgba(22, 24, 35, 0.12);
    box-sizing: border-box;
    position: relative;
  }
`;

export const PermissionDescCheckbox = styled.div`
  margin-top: 21px;
  max-width: 340px;
  color: rgba(22, 24, 35, 0.5);
  font-family: proxima-regular, Arial, Tahoma, PingFangSC, sans-serif, "Segoe UI Emoji", "Noto Emoji";
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
`;

export const OpPart = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const ButtonCancelOpPart = styled.button`
  margin-right: 16px;
  background-color: transparent;
  min-width: 164px;
  height: 46px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-family: ProximaNova,system-ui;
  padding: 6px 8px;
  border: 1px solid rgba(22, 24, 35, 0.12);
  color: #161823;
  user-select: none;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
`;

export const ButtonPostOpPart = styled.button`
  opacity: 1;
  background: rgba(22, 24, 35, 0.06);
  color: rgba(22, 24, 35, 0.34);
  border: none;
  cursor: not-allowed;
  min-width: 164px;
  height: 46px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
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
  transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
`;
