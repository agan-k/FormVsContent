import { Wrapper } from "./styled";

export function UtilityButton({children, onClick}) {
  return (
    <Wrapper>
      <button onClick={onClick}>{children}</button>
    </Wrapper>
  );
}

export function DownloadButton({children, path}) {
  return (
    <Wrapper>
      <a href={path} target="_blank">{children}</a>
    </Wrapper>
    )
}
