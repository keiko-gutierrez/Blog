import React from 'react'
import {
  Box,
  Center
} from '@chakra-ui/react'
// import data from '../fauxDb.js'

// import { Link } from 'react-router-dom'

function Header () {
  return (
    <div >
      <Box bg='#815939'>
        <Center>
          <h1 >Life of Yodita</h1>
        </Center>
      </Box>
      <nav >
        <ul >
          <li >
            {/*             <Link to='/' cHome</Link>
            <Link to='/' >About</Link>
            <Link to='/' >Portfolio</Link>
            <Link to='/' >Contact</Link>
 */}          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
