import { configureStore } from '@reduxjs/toolkit'
import { postsReducer, newPostReduser } from './postSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    newPost: newPostReduser
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch