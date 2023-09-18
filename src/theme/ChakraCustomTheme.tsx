import { extendTheme } from '@chakra-ui/react';

const Select = {
  variant: 'fill'
};

const theme = extendTheme({
  components: {
    Input: {
      color: 'black'
    },
    Select
  }
});

export default theme;
