import { Outlet } from 'react-router-dom';

const Testmain = () => {
  return (
    <>
      <div>
        <h1>Test 페이지</h1>
        <Outlet />        
      </div>
      
    </>
  );
};

export default Testmain;