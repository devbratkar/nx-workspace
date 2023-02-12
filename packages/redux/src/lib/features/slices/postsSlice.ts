import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postsApi } from '../services';
import { RootState } from '../store';

interface PostsSlice {
  data: any[];
  count: number;
  isLoading: boolean;
  error: boolean;
}

const initialState: PostsSlice = {
  data: [],
  count: 0,
  isLoading: false,
  error: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    savePosts: (state, action: PayloadAction<any[]>) => {
      const { payload } = action;
      state.data = payload;
      state.count = payload.length;
      state.isLoading = false;
      state.error = false;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        postsApi.endpoints.getAllPosts.matchFulfilled,
        (state, { payload }) => {
          state.data = payload;
          state.count = payload.length;
          state.isLoading = false;
          state.error = false;
        }
      )
      .addMatcher(postsApi.endpoints.getAllPosts.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(postsApi.endpoints.getAllPosts.matchRejected, (state) => {
        state.data = [];
        state.count = 0;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { savePosts } = postsSlice.actions;
export const getPostsCount = (state: RootState) => state?.posts?.count;
export default postsSlice.reducer;
