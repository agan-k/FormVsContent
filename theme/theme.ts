export const lightTheme = {
  name: 'light',
  fonts: {
    body: 'Courier, monospace, Helvetica, Ariel',
  },
  colors: {
    background: '#ebebeb',
    border: 'grey',
    muted: '#cccccc',
    lowKey: 'grey',
    text: '#575757',
    anchor: 'magenta',
    link: '#6cbcf5',
    invertBg: 'black',
    invertText: '#d4d4d6',
    hover: 'black',
    invertHover: 'white',
  },
  breakpoints: ['480px', '1100px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 236, 472],
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  shadows: {
    nav: '0 2px 1px rgb(240, 240, 240)',
    float: '0 3px 8px 1px #242323',
    landing: '0 30px 58px 1px #cccc',
    card: '0 5px 8px 3px rgb(240, 240, 240)',
    inlineCode: '1px 2px 16px #cccccc inset'
  },
  borders: {
    understated: '1px solid #dbdbdb',
    button: '4px solid magenta'
  }
};

export const darkTheme = {
  name: 'dark',
  fonts: {
    body: 'Courier, monospace, Helvetica, Ariel',
  },
  colors: {
    background: 'black',
    muted: '#7e807e',
    text: '#d4d4d6',
    anchor: 'cyan',
    link: '#6cbcf5',
    lowKey: '#7e807e',
    invertBg: '#ebebeb',
    invertText: '#575757',
    hover: 'white',
    invertHover: 'black',
  },
  breakpoints: ['480px', '1100px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 236, 472],
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  shadows: {
    nav: '0 3px 8px 1px #242323',
    float: '0 3px 8px 1px #2e2d2d',
    landing: '0 3px 58px 1px #2e2d2d',
    card: '0 5px 8px 3px #242323',
    inlineCode: '1px 2px 16px #7e807e inset'
  },
  borders: {
    understated: '1px solid #292929',
    button: '4px solid cyan'
  }
}