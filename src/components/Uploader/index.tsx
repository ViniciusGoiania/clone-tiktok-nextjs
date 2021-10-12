import React from 'react';
import { UploaderContainer, UploaderUp, UploaderBtn, UploaderCardBefore, ImageUploader,
   TextMainUploader, TextSubUploader, TextInfoVideoUploader, FileSelectButton } from './styles';

const Uploader: React.FC = () => (
    <UploaderContainer>                
    <UploaderUp>
      <UploaderBtn>
        <UploaderCardBefore>
          <ImageUploader src="/images/cloud-icon-upload.svg" />
          <TextMainUploader>Select video to upload</TextMainUploader>
          <TextSubUploader>Or drag and drop file</TextSubUploader>
          <TextInfoVideoUploader>
            <div>MP4 or WebM</div>
            <div>720x1280 resolution or higher</div>
            <div>
              <li>Up to 180 seconds</li>
            </div>
            <div>Less than 1 GB</div>
          </TextInfoVideoUploader>
          <FileSelectButton>Select file</FileSelectButton>
        </UploaderCardBefore>
      </UploaderBtn>
    </UploaderUp>
  </UploaderContainer>
  )

export default Uploader;
