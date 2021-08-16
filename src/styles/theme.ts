import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "50": "#FFFFFF",
      "100": "#F5F8FA",
      "200": "#DADADA",
      "300": "#999999",
      "400": "#47585B",
      "500": "#000000",
      "600": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'yellow.50',
        color: 'yellow.400'
      }
    }
  }
})