"use client";
import { initialStateType } from "@/types/initialState.type";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/videos";

export const fetchList = createAsyncThunk("youtube/videos/get", async () => {
  try {
    const res = await axios(
      `${YOUTUBE_API}?part=snippet&chart=mostPopular&maxResults=200&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`
    );
    return res.data
  } catch (error) {
    console.log(error);
  }
});

const initialState: initialStateType = {
  loading: false,
  data: [],
  error: null,
};
console.log("test")

const videoListSlicer = createSlice({
  name: "youtube/videos/get",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchList.pending, (state)=>{
        state.loading = true
    }).addCase(fetchList.fulfilled, (state, action:any)=>{
        state.data = action.payload
    }).addCase(fetchList.rejected, (state, action:any)=>{
        state.error = action.payload
    })
  },
});

export default videoListSlicer.reducer;
