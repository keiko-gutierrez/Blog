import React from 'react'

import {
  Link,
  Box,
  Center
} from '@chakra-ui/react'
// import data from '../fauxDb.js'

// import { Link } from 'react-router-dom'

function Header () {
  return (
    <div >
      <Box bg='purple.200'>
        <Center>
          <h1 >Life of Yodita</h1>
        </Center>
      </Box>
      <nav >
        <ul >
          <li >
            <Link to='/'> Home</Link>
            <Link to='/identityvalues' >Identity and Values</Link>
            <Link to='/reflections' >Reflections</Link>
            <Link to='/techblog' >Tech Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
