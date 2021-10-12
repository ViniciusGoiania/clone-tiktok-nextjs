import React from 'react';
import { DesktopContainer, MainBody, LayoutBg, Container, Title, SubTitle, Contents } from '../styles/upload/styles';
import FormUploader from '../components/FormUploader';
import Uploader from '../components/Uploader';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Upload: React.FC = () => (
    <DesktopContainer>
      <Header />
      <MainBody>
        <LayoutBg>
          <Container>
            <Title>
              Upload video
            <SubTitle>This video will be published to @username</SubTitle>
            </Title>
            <Contents>
              <Uploader />
              <FormUploader />
            </Contents>
          </Container>
        </LayoutBg> 
      </MainBody>
      <Footer />
    </DesktopContainer>
  )

export default Upload;
