import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';
import { AppDispatch } from 'state/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
