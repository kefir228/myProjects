import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import anakin from '../components/Img/anakin.jpg'
import anakinPost from "../components/Img/960x0.jpg"
import yoda from '../components/Img/yoda.jpg'
import yodaPost from '../components/Img/yoda-post.jpg'
import kenobi from '../components/Img/kenobi.jpg'
import kenobiPost from '../components/Img/kenobiPost.jpg'

interface Post {
  id: number;
  avatar: string;
  name: string;
  email: string;
  date: string;
  postText: string;
  image: string;
  comments: number;
  shares: number;
  likes: number;
}

interface PostsState {
  posts: Post[];
}

interface AddPostState {
  h1: string;
  inputLinkPhoto: string;
  inputName: string;
  inputText:string;
  email:string;
  photoContent:string;
}

const initialState: PostsState = {
  posts: [
    {
      id: 1,
      avatar: anakin,
      name: 'Anakin Skywalker',
      email: '@dart_vader',
      date: '26 лют.',
      postText: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
      image: anakinPost,
      comments: 482,
      shares: 146,
      likes: 887,
    },
    {
      id: 2,
      avatar: yoda,
      name: 'Yoda',
      email: '@master_yoda',
      date: '15 бер.',
      postText: 'Patience you must have, my young padawan.',
      image: yodaPost,
      comments: 389,
      shares: 205,
      likes: 990,
    },
    {
      id: 3,
      avatar: kenobi,
      name: 'Obi-Wan Kenobi',
      email: '@kenobi',
      date: '9 лип.',
      postText: 'The Force will be with you, always.',
      image: kenobiPost,
      comments: 456,
      shares: 675,
      likes: 125,
    },
  ],
};

const initialAddPostState: AddPostState = {
  h1: 'Add Post',
  inputLinkPhoto: '',
  inputName: '',
  inputText: '',
  email:'',
  photoContent:'',
}

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload)
    }
  },
});

const newPostSlice = createSlice({
  name: 'newPost',
  initialState: initialAddPostState,
  reducers: {
    setNewPosts(state, action: PayloadAction<Partial<AddPostState>>) {
      state.inputLinkPhoto = action.payload.inputLinkPhoto || state.inputLinkPhoto
      state.inputName = action.payload.inputName || state.inputName
      state.inputText = action.payload.inputText || state.inputText
      state.email = action.payload.email || state.email
      state.photoContent = action.payload.photoContent || state.photoContent
    }
  }
})

export const { setNewPosts } = newPostSlice.actions
export const { setPosts, addPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
export const newPostReduser = newPostSlice.reducer
