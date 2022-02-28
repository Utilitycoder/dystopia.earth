import store from "./redux/store";
import { Provider} from "react-redux";
import {SSRProvider} from '@react-aria/ssr';

import './css/custom.css';


function MyApp({ Component, pageProps }) {
  return (
  <SSRProvider>
    <Provider store={store} >
      <Component {...pageProps} />
    </Provider>
  </SSRProvider>
  );
}

export default MyApp
