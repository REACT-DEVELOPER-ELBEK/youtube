"use client"
import { fetchList } from '@/redux/slicer/getSlice'
import { AppDispatch, RootState } from '@/redux/store/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  const data = useSelector((state:RootState)=>console.log(state.getListSlicer?.data))
  useEffect(()=>{
    dispatch(fetchList())
  }, [])
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">

        </div>
      </div>
    </div>
  )
}

export default Home