import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import setupStore from '../lib/store';

function ProviderWrapper({ children }: { children: ReactNode }) {
  return <Provider store={setupStore()}>{children}</Provider>;
}

export default ProviderWrapper;
