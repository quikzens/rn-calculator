import React from 'react'
import { Text } from 'native-base'

const Title = ({ content }) => {
  return (
    <Text
      marginTop='40px'
      marginLeft='40px'
      marginBottom='10px'
      fontSize='20px'
      fontWeight='bold'
      color='#ffeaea'
    >
      {content}
    </Text>
  )
}

export default Title
