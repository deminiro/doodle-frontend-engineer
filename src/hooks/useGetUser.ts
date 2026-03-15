import { useEffect } from 'react';
import { useActions } from '../store/hooks';

export const useGetUser = () => {
  const { setUserName } = useActions();

  useEffect(() => {
    const name = window.prompt('Enter your name for the chat:');
    setUserName(name?.trim() || 'Anonymous');
  }, [setUserName]);
};
