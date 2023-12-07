"use client"
import { configureStore } from "@reduxjs/toolkit";
import videoListSlicer from '../slicer/getSlice'

export const store = configureStore({
    reducer:{
        getListSlicer: videoListSlicer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch