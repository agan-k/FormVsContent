import { useState } from 'react'
import { 
  Wrapper, 
  LogoWrapper, 
  LogosContainer, 
  LogoInfo,
  Name,
  SourceLink,
  FloatingImage,
  ScreenshotsContainer,
  DesktopScreeshots,
  TabletAndMobileContainer,
  TabletScreeshots,
  MobileScreeshots,
  FloatingImagesContainer,
} from './styled';

interface OngoingProjectProps {
  data: any
}

export const OngoingProject: React.FC<OngoingProjectProps> = ({data}) => {
  const [imgIndex, setImgIndex] = useState();
  const floatingImages = data?.floatingImage || [];
  const hasFloatingImages = Boolean(data.floatingImage != null);
  
  return (
    <Wrapper>
      <Name><a href={data.url}>{data.name}</a></Name>
        <p dangerouslySetInnerHTML={{__html: data.description}} />
      <LogoInfo>
        {data.stack.map((item, index) =>
          index == imgIndex ? 
          <h3 key={item.id}>{item.name}</h3> : <h3 key={item.id}></h3>
        )}
      </LogoInfo>
      <LogosContainer>
        {data.stack.map((item, index) => 
          <LogoWrapper key={item.id}>
            <img
              onMouseOver={() => setImgIndex(index)}
              onMouseOut={() => setImgIndex(null)}
              src={item.src} 
            />
          </LogoWrapper>
        )}
      </LogosContainer>
      {data.githubLink && (
        <SourceLink>
          <span>Source:</span>&nbsp;
          <a href={data.githubLink}>
            GitHub
          </a>
        </SourceLink>
      )}
      <ScreenshotsContainer>
        {hasFloatingImages && (
          <FloatingImagesContainer>
            {floatingImages.map(fi => 
                <FloatingImage key={fi}>
                  <img src={fi} />
                </FloatingImage>
            )}
          </FloatingImagesContainer>
        )}
        {data.desktopScreenshot && (
          <DesktopScreeshots>
            {data.desktopScreenshot.map((item, index) => 
              <img key={item} src={item} />
            )}
          </DesktopScreeshots>
        )}
        <TabletAndMobileContainer>
          {data.tabletScreenshot && (
            <TabletScreeshots>
              {data.tabletScreenshot.map((item, index) => 
                <img key={item} src={item} width='70' />
              )}
            </TabletScreeshots>
          )}
          {data.mobileScreenshot && (
            <MobileScreeshots>
              {data.mobileScreenshot.map((item, index) =>
                <img key={item} src={item} width='30' />
              )}
            </MobileScreeshots>
          )}
        </TabletAndMobileContainer>
      </ScreenshotsContainer>
    </Wrapper>
  )
}