import { useState } from 'react'
import { 
  Wrapper, 
  LogoWrapper, 
  LogosContainer, 
  LogoInfo,
  Name,
  SourceLink,
  ScreenshotsContainer,
  DesktopScreeshots,
  TabletAndMobileContainer,
  TabletScreeshots,
  MobileScreeshots,
} from './styled';

export default function OngoingProject({data}) {
  const [ imgIndex, setImgIndex] = useState()

  return (
    <Wrapper>
      <Name><a href={data.url}>{data.name}</a></Name>
      <p>
        {data.description}
      </p>
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
          <h3>Source:</h3>
          <a href={data.githubLink}>
            <img src='/assets/github.png' />
          </a>
        </SourceLink>
      )}
      <ScreenshotsContainer>
        {data.desktopScreenshot && (
          <DesktopScreeshots>
            {data.desktopScreenshot.map((item, index) => 
              <img key={item} src={item} width='200' />
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