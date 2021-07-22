import React from 'react'
import { Flex, VStack, HStack, Button } from 'native-base'
import SingleButton from './Button'

const Display = ({ handleClick, handleResult }) => {
  return (
    <Flex justifyContent='center' alignItems='center'>
      <VStack space={4}>
        <HStack space={4}>
          <SingleButton content='1' handleClick={handleClick} />
          <SingleButton content='2' handleClick={handleClick} />
          <SingleButton
            content='-'
            handleClick={handleClick}
            backgroundColor='#930707'
          />
          <SingleButton
            content='+'
            handleClick={handleClick}
            backgroundColor='#930707'
          />
        </HStack>
        <HStack space={4}>
          <SingleButton content='3' handleClick={handleClick} />
          <SingleButton content='4' handleClick={handleClick} />
          <SingleButton
            content='/'
            handleClick={handleClick}
            backgroundColor='#930707'
          />
          <SingleButton
            content='*'
            handleClick={handleClick}
            backgroundColor='#930707'
          />
        </HStack>
        <HStack space={4}>
          <SingleButton content='5' handleClick={handleClick} />
          <SingleButton content='6' handleClick={handleClick} />
          <SingleButton
            content='%'
            handleClick={handleClick}
            backgroundColor='#930707'
          />
          <Button
            size={16}
            backgroundColor='#930707'
            onPress={handleResult}
            _text={{
              fontSize: 32,
              bold: true,
              color: '#ffeaea',
            }}
          >
            =
          </Button>
        </HStack>
        <HStack space={4}>
          <SingleButton content='7' handleClick={handleClick} />
          <SingleButton content='8' handleClick={handleClick} />
          <SingleButton content='9' handleClick={handleClick} />
          <SingleButton content='0' handleClick={handleClick} />
        </HStack>
      </VStack>
    </Flex>
  )
}

export default Display
