import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/auth-slice';
// import ModalReducer from './features/modal-slice';
import SideNavigationBar from './features/navigation-bar-slice';

export const store = configureStore({
  reducer: {
    SideNavigationBar, 
    AuthReducer,
    // ModalReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
