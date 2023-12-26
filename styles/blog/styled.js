import styled from "styled-components";
import {theme as staticTheme} from "../../theme";
import {mediaQuery} from "../../utils";

export const BlogWrapper = styled('div')(
  {
    margin: '0 auto',
  },
  mediaQuery({
    width: ['95%', '60%']
  })
);