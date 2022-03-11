import React from 'react'
// import { Link } from 'react-router-dom'

import {
  Stack,
  Box,
  Center,
  Heading,
  Button
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

function Header () {
  return (
    <div >
      <Box bg='#5d8155'>
        <Center>
          <Heading >Life of Yodita</Heading>
        </Center>
      </Box>
      <Box bg='#5d8155'>
        <Center>
          <Stack spacing={4} direction='row' align='center'>
            <Link to='/'> <Button bg='#815939' to='./'> Home</Button> </Link>
            <Link to='../Pages/IdentityValues'> <Button bg='#815939' >Identity and Values</Button> </Link>
            <Link to='../Pages/Reflections'> <Button bg='#815939' >Reflections</Button> </Link>
            <Link to='../Pages/TechBlog'> <Button bg='#815939' >Tech Blog</Button> </Link>
          </Stack>
        </Center>
      </Box>
    </div>
  )
}

export default Header
