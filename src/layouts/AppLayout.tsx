import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
