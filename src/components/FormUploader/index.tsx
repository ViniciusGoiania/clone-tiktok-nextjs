import React, { useState } from 'react';

import { Form, CaptionWrap, CaptionContainer, TextContainer, TitleFont, RequireFont,
   CaptionText, CaptionTextContainer, EditorCaption, DrafEditorRoot, DrafEditorContainer,
   DrafEditorContent, IconAt, IconHash, FormCoverTitle, CoverContainer,
   CoverContainerInner, CoverCandidate, FormItemFlex, PermissionTop, PermissionTopTitle,
   TikTokSelect, TikTokSelector, TikTokSelectorLeft, TikTokSelectorIcon, PermissionCheckBox,
   CheckBoxTitle, CheckBoxContainer, LabelCheckBox, OpPart, ButtonCancelOpPart, ButtonPostOpPart } from './styles';

const checkLabels = [
  {
    checklabel: "Commet"
  },
  {
    checklabel: "Duet"
  },
  {
    checklabel: "Stitch"
  },
]

const FormUploader: React.FC = () => {
  const [count, getCount] = useState(0);

  return (
    <Form>
      <CaptionWrap>
        <CaptionContainer>
          <div>
            <TextContainer>
            <TitleFont>Caption</TitleFont>
            <RequireFont>
              <span>{count} </span>
              / 150
            </RequireFont>
            </TextContainer>
            <CaptionText>
              <CaptionTextContainer>
                <EditorCaption>
                  <DrafEditorRoot>
                    <DrafEditorContainer>
                      <DrafEditorContent maxLength={150} onChange={e => getCount(e.target.value.length)}>
                      </DrafEditorContent>
                    </DrafEditorContainer>
                  </DrafEditorRoot>
                </EditorCaption>
                <IconAt>
                  <img src="/images/icon-at.svg" alt="" />
                </IconAt>
                <IconHash>
                  <img src="/images/icon-hash.svg" alt="" />
                </IconHash>
              </CaptionTextContainer>
            </CaptionText>
          </div>
        </CaptionContainer>
      </CaptionWrap>
      <FormCoverTitle>Cover</FormCoverTitle>
      <CoverContainer>
        <CoverContainerInner>
          <CoverCandidate />
        </CoverContainerInner>
      </CoverContainer>
      <FormItemFlex>
        <PermissionTop>
          <PermissionTopTitle>Who can view this video</PermissionTopTitle>
          <TikTokSelect>
            <TikTokSelector>
              <TikTokSelectorLeft>
                <div></div>
                <span>Friends</span>
              </TikTokSelectorLeft>
              <TikTokSelectorIcon>
                <img src="/images/arrow-down-selector.svg" alt="" />
              </TikTokSelectorIcon>
            </TikTokSelector>
          </TikTokSelect>
        </PermissionTop>
        <PermissionCheckBox>
          <CheckBoxTitle>Allow users to:</CheckBoxTitle>
          <CheckBoxContainer>
            {checkLabels.map((itemCheckBox, index) => (
              <LabelCheckBox key={index}>
                <input type="text" />
                <span></span>
                {itemCheckBox.checklabel}
              </LabelCheckBox>              
            ))}
          </CheckBoxContainer>
        </PermissionCheckBox>                 
      </FormItemFlex>
      <OpPart>
        <ButtonCancelOpPart>Discard</ButtonCancelOpPart>
        <ButtonPostOpPart>Post</ButtonPostOpPart>
      </OpPart>
    </Form>
  );
}

export default FormUploader;
