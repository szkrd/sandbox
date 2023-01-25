import { IAppState, TSetState } from './appState'; // this is only the type, otherwise it would be a circular reference!

// I could extend the getter part to be generic (so that we could have a 'ui' json string
// in the session storage), parse that and prepopulate the initial state, but for now this is enough
function withSession(state: IUiState): IUiState {
  if (state.theme) sessionStorage.setItem('ui.theme', state.theme);
  return state;
}

export enum UiTheme {
  Dark = 'dark',
  Light = 'light',
}

export const getInitialUiState = () => ({
  theme: sessionStorage.getItem('ui.theme') || UiTheme.Light,
});

export const initialUiState = getInitialUiState();

export type IUiState = typeof initialUiState;
export type IPartialUiState = Partial<IUiState>;

export const setUiStateTheme = (setState: TSetState, theme: UiTheme) =>
  setState((prev: IAppState) => ({
    ...prev,
    ui: withSession({ ...prev.ui, theme }),
  }));

export const flipUiStateTheme = (setState: TSetState) =>
  setState((prev: IAppState) => ({
    ...prev,
    ui: withSession({ ...prev.ui, theme: prev.ui.theme === UiTheme.Dark ? UiTheme.Light : UiTheme.Dark }),
  }));
