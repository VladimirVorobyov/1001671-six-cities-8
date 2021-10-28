import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../types/State';

export const useTypeSelector:TypedUseSelectorHook<State> = useSelector;
