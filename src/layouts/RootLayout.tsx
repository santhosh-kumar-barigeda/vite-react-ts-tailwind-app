import { Outlet } from 'react-router-dom';
import Providers from '../components/providers/Providers';

const RootLayout = () => {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
};

export default RootLayout;
