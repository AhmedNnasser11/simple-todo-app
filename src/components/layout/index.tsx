import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto p-4 overflow-hidden relative bg-gray-100 h-screen">
      {children}
    </div>
  );
};

export default Layout;
