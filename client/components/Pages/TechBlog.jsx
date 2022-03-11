import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  Center,
  Input
} from '@chakra-ui/react'
import { fetchTechBlog, addTechPost } from '../../actions'

function TechBlog () {
  const blog = useSelector(state => state.blog)
  const [newPost, setNewPost] = useState(blog)
  const dispatch = useDispatch()

  function handleChange (event) {
    setNewPost(event.target.value)
  }

  function handleAdd (event) {
    event.preventDefault()
    dispatch(addTechPost(newPost))
    setNewPost('')
  }

  useEffect(() => {
    dispatch(fetchTechBlog())
  }, [2])
  return (
    <div>
      <Box bg='purple.50' text='purple.200' height='1000px'>
        <Center>
          {blog.map((post) => post.content)}
          <Input
            content="addPost"
            onChange={handleChange}
            value={newPost} />
          <Input type='submit' onClick={handleAdd} />
        </Center>
      </Box>
    </div>
  )
}

export default TechBlog
