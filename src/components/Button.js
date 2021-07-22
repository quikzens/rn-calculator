import React from 'react'
import { Button } from 'native-base'

const SingleButton = ({
  content,
  handleClick,
  backgroundColor = '#ff5757',
}) => {
  return (
    <Button
      size={16}
      backgroundColor={backgroundColor}
      onPress={() => handleClick(content)}
      _text={{
        fontSize: 32,
        bold: true,
        color: '#ffeaea',
      }}
    >
      {content}
    </Button>
  )
}

export default SingleButton
