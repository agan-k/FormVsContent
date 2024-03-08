export const lightTheme = {
  name: 'light',
  colors: {
    background: '#ebebeb',
    border: 'grey',
    muted: '#cccccc',
    lowKey: 'grey',
    text: '#575757',
    anchor: 'magenta',
    invertBg: 'black',
    invertText: '#d4d4d6',
    hover: 'black',
    invertHover: 'white',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 236, 472],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],

  shadows: {
    nav: '0 2px 1px rgb(240, 240, 240)',
    float: '0 3px 8px 1px #242323',
    landing: '0 30px 58px 1px #cccc',
    card: '0 5px 8px 3px rgb(240, 240, 240)',
    inlineCode: '1px 2px 16px rgb(227, 227, 227) inset'
  },
  borders: {
    understated: '1px solid #dbdbdb',
  }
}

export const darkTheme = {
  name: 'dark',
  colors: {
    background: 'black',
    muted: '#7e807e',
    text: '#d4d4d6',
    anchor: 'cyan',
    lowKey: '#7e807e',
    invertBg: '#ebebeb',
    invertText: '#575757',
    hover: 'white',
    invertHover: 'black',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 236, 472],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],

  shadows: {
    nav: '0 3px 8px 1px #242323',
    float: '0 3px 8px 1px #2e2d2d',
    landing: '0 3px 58px 1px #2e2d2d',
    card: '0 5px 8px 3px #242323',
    inlineCode: '1px 2px 16px rgb(68, 68, 68) inset'
  },
  borders: {
    understated: '1px solid #292929',
  }

}