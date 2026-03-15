import { useEffect } from 'react';
import { useActions } from './useActions';

export const useGetUser = () => {
  const { setUserName } = useActions();

  useEffect(() => {
    const name = window.prompt('Enter your name for the chat:');
    setUserName(name?.trim() || 'Anonymous');
  }, [setUserName]);
};
