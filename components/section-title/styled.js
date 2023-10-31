import styled from "styled-components";
import {theme as StaticTheme} from '../../theme'

export const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})
export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '.3rem',
  h1: {
    fontSize: StaticTheme.space[5],
    marginTop: StaticTheme.space[3],
    marginBottom: 0,
  }
})
export const CurlyBracket = styled('span')({
  fontSize: '7rem',
  fontWeight: '100',
  color: 'orange',
})