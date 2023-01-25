// we can't put this into the respective state section in order to avoid circular deps
import { useCallback } from 'react';
import { useAppState } from './appState';
import { IPartialUiState } from './uiState';

// I'm not using this now, I go down the full appState in the component,
// that's much easier to understand for anyone and works as long as
// the state tree is not particularly complex
export function useUiState() {
  const [appState, setAppState] = useAppState();
  const setUiState = useCallback(
    (subState: IPartialUiState) => {
      setAppState((prev) => ({
        ...prev,
        ui: { ...prev.ui, ...subState },
      }));
    },
    [setAppState]
  );
  return [appState.ui, setUiState];
}
