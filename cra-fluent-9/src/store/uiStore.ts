import { Store } from 'pullstate';

export enum UiTheme {
  Dark = 'dark',
  Light = 'light',
}

const initialState = {
  theme: sessionStorage.getItem('ui.theme') || UiTheme.Light,
};

export const uiStore = new Store(initialState);

export type IUiStore = typeof initialState;

export function uiToggleTheme(draft: IUiStore) {
  draft.theme = draft.theme === UiTheme.Dark ? UiTheme.Light : UiTheme.Dark;
  sessionStorage.setItem('ui.theme', draft.theme);
}
