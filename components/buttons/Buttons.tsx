import { ReactNode } from "react";
import Link from "next/link";
import { Wrapper } from "./styled";

interface UtilityButtonProps {
  children: ReactNode
  handleToggle: React.MouseEventHandler<HTMLButtonElement> 
}

export const UtilityButton: React.FC<UtilityButtonProps> = ({
  children, 
  handleToggle
}) => {
  return (
    <Wrapper>
      <button onClick={handleToggle}>{children}</button>
    </Wrapper>
  );
};

interface DownloadButtonProps {
  children: ReactNode
  path: string
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  children, 
  path
}) => {
  return (
    <Wrapper>
      <Link href={path} target="_blank">{children}</Link>
    </Wrapper>
  );
};
