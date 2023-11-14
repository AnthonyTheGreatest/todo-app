import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Root = () => {
  return (
    <div className="grid grid-rows-[100px_minmax(0,_1fr)_50px] gap-y-4 bg-slate-200 min-h-screen font-custom text-slate-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
