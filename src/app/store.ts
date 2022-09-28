import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from 'app/features/appSlice';
import themeReducer from 'app/features/themeSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
