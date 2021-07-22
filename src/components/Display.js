import React from 'react'
import { Center, Box, Input } from 'native-base'

const Display = ({ previous, value }) => {
  return (
    <Center width='100%' marginBottom={8}>
      <Box
        width='305px'
        backgroundColor='#ffeaea'
        borderColor='#ffeaea'
        borderRadius='10px'
      >
        <Box
          width='100%'
          height='30px'
          px='10px'
          pt='5px'
          _text={{
            fontSize: 20,
            bold: true,
            color: 'rgba(20, 20, 20, 0.2)',
            textAlign: 'right',
          }}
        >
          {previous}
        </Box>
        <Input
          isReadOnly={true}
          width='305px'
          height='55px'
          px='10px'
          pt='5px'
          backgroundColor='#ffeaea'
          borderColor='#ffeaea'
          value={value}
          textAlign='right'
          fontWeight='bold'
          fontSize={32}
        />
      </Box>
    </Center>
  )
}

export default Display
