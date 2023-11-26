import Layout from 'components/Layout';
import { wrapper } from '../lib/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '/src/styles/globals.scss';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
