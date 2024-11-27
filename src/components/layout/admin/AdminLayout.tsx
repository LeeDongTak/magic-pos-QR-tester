import { useState } from 'react';
import AdminLayoutWrapper from './AdminLayoutWrapper';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded] = useState(true);

  // useEffect(() => {
  //   if (isLoaded && !session) router.push(HOME_PATH);
  //   if (path !== MANAGEMENT_PATH) defaultToggle();
  //   setIsLoaded(true);
  // }, [isLoaded, path, router, session]);

  return (
    <>
      <style jsx global>{`
        @media only all and (max-width: 1520px) {
          html {
            font-size: 8px;
          }
        }
      `}</style>
      {isLoaded && <AdminLayoutWrapper>{children}</AdminLayoutWrapper>}
    </>
  );
};

export default AdminLayout;
