import { Dispatch, SetStateAction, useState } from 'react';
import { createContainer } from 'react-tracked';
import { DeepPartial } from '../utils/typescript';
import { initialUiState } from './uiState';

const initialAppState = {
  ui: initialUiState,
};

export type IAppState = typeof initialAppState;

export type IPartialAppState = DeepPartial<IAppState>;

export type TSetState = Dispatch<SetStateAction<IAppState>> | ((value: SetStateAction<IAppState>) => IAppState);

const useCurrentState = () => useState(initialAppState);

export const { Provider: AppStateProvider, useTracked: useAppState } = createContainer(useCurrentState);
