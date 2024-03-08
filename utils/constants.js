import {theme as staticTheme} from "../theme";

export const navLinks = [
  {name: 'home', link: '/'},
  {name: 'blog', link: '/blog'},
  {name: 'about', link: '/about'},
]
export const extLinks = [
  {name: 'GitHub', link: 'https://www.github.com/agan-k'},
  {name: 'LinkedIn', link: 'https://www.linkedin.com/in/koran-agan/'},
  {name: 'email', link: 'mailto:koranagan@gmail.com'},
]

export const MOBILE_BREAKPOINT = parseInt(staticTheme.breakpoints[0]);

export const Z_INDEX = {
  landing: [-1, 3],
  header: 2,
  mobileLogo: 1,
}
