import { useLocation } from 'react-router-dom';

const usePathName = () => {
  const location = useLocation();
  const array = location.pathname.split('/');
  return array[2];
}

export default usePathName;
