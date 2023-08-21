import { configureStore } from '@reduxjs/toolkit';
import AppTheme from './Providers/AppTheme';

export default configureStore({
  reducer: {
    counter: AppTheme,
},
})