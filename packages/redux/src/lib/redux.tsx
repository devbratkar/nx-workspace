import { Provider } from 'react-redux';
import { store } from './features/store';

interface AppProviderProps {
  children: JSX.Element;
}

export function AppProvider({ children }: AppProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default AppProvider;
