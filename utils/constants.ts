import {lightTheme as theme} from "../theme";

export const navLinks = [
  {name: 'home', link: '/'},
  {name: 'blog', link: '/blog'},
  {name: 'about', link: '/about'},
]
export const extLinks = [
  {name: 'GitHub', link: 'https://www.github.com/agan-k'},
  {name: 'Linkedin', link: 'https://www.linkedin.com/in/koran-agan/'},
  {name: 'email', link: 'mailto:koranagan@gmail.com'},
]

export const MOBILE_BREAKPOINT = parseInt(theme.breakpoints[0]);

export const Z_INDEX = {
  landing: [-1, 3],
  header: 2,
  mobileLogo: 1,
}
