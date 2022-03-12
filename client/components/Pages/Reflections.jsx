import React, { useState } from 'react'
// import store from '../../store'
import { deleteBlog } from '../../actions'
import {
  Box,
  Center,
  Heading,
  Link
} from '@chakra-ui/react'

function Reflections () {
  const [blog, setBlog] = useState('')

  function handleChange (event) {
    setBlog(event.target.value)
  }

  function handleAdd (event) {
    event.preventDefault()
    store.dispatch(blog(editBlog))
    setBlog('')
  }

  // function handleDelete (event, blog) {
  // store.dispatch(deleteBlog(blog))
  //   event.preventDefault()
  // }

  // const { blog } = store.getState()

  return (
    <div>
      <Box bg='purple.50' text='purple.200' height='xl'>
        <Center>
          <Heading>Reflections</Heading>
          {/*               {blog.map((reflections) =>
                 key={reflections}>{blog} {' '})} */}
          {/* <Link to="" onClick={(e) => handleDelete(e, reflections)}>X</Link> */}

        </Center>
      </Box>
    </div>
  )
}

export default Reflections
