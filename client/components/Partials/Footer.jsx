import React from 'react'
import {
  Box,
  Center
} from '@chakra-ui/react'

function Footer (props) {
  const copyright = '2022 KeikoGTZ'
  const developer = 'Keiko'

  return (
    <div className='footer'>
      <Box bg='#5d8155'>
        <Center>
          <div>&copy; {copyright}</div>
          <div> _Developer_ {developer}</div>
        </Center>
      </Box>
    </div>
  )
}

export default Footer
