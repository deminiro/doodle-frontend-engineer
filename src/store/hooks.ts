import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './index';
import { userActions } from '../config/slice/user';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

const actions = {
  ...userActions,
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actions, dispatch);
};
