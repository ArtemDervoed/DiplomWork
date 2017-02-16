import { injectGlobal } from 'styled-components';
import Lato from './fonts/Lato-Regular.woff2';
import LatoBold from './fonts/Lato-Bold.woff2';
import LatoLight from './fonts/Lato-Light.woff2';
/* eslint no-unused-expressions: 0 */
injectGlobal`
:focus
  outline: none

@font-face {
  font-family: Lato;
  src: url('${Lato}');
}

@font-face {
  font-family: LatoBold;
  src: url('${LatoBold}');
}
@font-face {
  font-family: LatoLight;
  src: url('${LatoLight}');
}
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {

  }
  body.fontLoaded {

  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }
`;
