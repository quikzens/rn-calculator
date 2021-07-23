import React from 'react'
import { Flex, VStack, HStack, Button } from 'native-base'
import SingleButton from './Button'

const ListButton = (props) => {
  const { handleClick, handleResult, handleSubtract, handleClean } = props

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
          <SingleButton
            content='.'
            handleClick={handleClick}
            backgroundColor='#930707'
          />
        </HStack>
        <HStack space={4}>
          <SingleButton content='7' handleClick={handleClick} />
          <SingleButton content='8' handleClick={handleClick} />
          <Button
            size={16}
            backgroundColor='#930707'
            onPress={handleSubtract}
            _text={{
              fontSize: 32,
              bold: true,
              color: '#ffeaea',
            }}
          >
            &lt;
          </Button>
          <Button
            size={16}
            backgroundColor='#930707'
            onPress={handleClean}
            _text={{
              fontSize: 32,
              bold: true,
              color: '#ffeaea',
            }}
          >
            C
          </Button>
        </HStack>
        <HStack space={4}>
          <SingleButton content='9' handleClick={handleClick} />
          <SingleButton content='0' handleClick={handleClick} />
          <Button
            width='144px'
            height={16}
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
      </VStack>
    </Flex>
  )
}

export default ListButton
