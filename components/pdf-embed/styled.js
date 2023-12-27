import styled from "styled-components";
import {theme as staticTheme} from '../../theme';

export const PdfWrapper = styled('div')(
  {
    object: {
      height: ({isOpenPDF}) => isOpenPDF ? '100Vh' : staticTheme.space[3],
    },
  }
);