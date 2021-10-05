import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 356px !important;
  position: relative;

  @media and screen (max-width: 991px) {
    flex: 0 0 68px !important;
    position: relative;
  }
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

export const TrendingContainer = styled.div`
  padding: 24px 0;
  margin-right: 24px;
  width: 692px;
  max-width: 692px;

  @media and screen (max-width: 991px) {
    margin-left: 16px;
  }
`;

export const TrendingFeed = styled.div`
`;

export const VideoFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: flex-end;
`;
