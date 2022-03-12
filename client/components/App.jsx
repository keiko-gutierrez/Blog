import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

// import { fetchBlog } from '../actions'

import Header from './Partials/Header'
import Footer from './Partials/Footer'
// import NaviBar from './Partials/NaviBar'
import Home from './Pages/Home'
import IdentityValues from './Pages/IdentityValues'
import Reflections from './Pages/Reflections'
import TechBlog from './Pages/TechBlog'

function App () {
/*   const blog = useSelector(state => state.blog)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBlog())
  }, [])
 */
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pages/Home' element={<Home />} />
          <Route path='/Pages/IdentityValues' element={<IdentityValues />} />
          <Route path='/Pages/Reflections' element={<Reflections />} />
          <Route path='/Pages/TechBlog' element={<TechBlog />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
