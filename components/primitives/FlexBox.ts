import styled from "styled-components";

export const FlexBox = styled('div')(
  {
    display: 'flex',
    justifyContent: ({justifyContent}) => justifyContent ? justifyContent : 'unset',
    alignItems: ({alignItems}) => alignItems ? alignItems : 'unset',
    gap: ({gap}) => gap,
  }
);