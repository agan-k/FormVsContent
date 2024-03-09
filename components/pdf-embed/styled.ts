import styled from "styled-components";

export const PdfWrapper = styled('div')(
  {
    object: {
      height: ({isOpenPDF}) => isOpenPDF ?
        '100Vh' : ({theme}) => `${theme.space[7]}px`,
    },
  }
);