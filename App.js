import React, { useState } from 'react'
import { NativeBaseProvider, Box } from 'native-base'
import Title from './src/components/Title'
import Display from './src/components/Display'
import ListButton from './src/components/ListButton'

const App = () => {
  const [value, setValue] = useState('')
  const [previous, setPrevious] = useState('')
  const operators = ['+', '-', '/', '*']

  const handleClick = (text) => {
    if (value === '0') {
      setValue('')
    }

    if (value.length === 0 && text === '0') return
    if (value.length === 0 && operators.includes(text)) return

    const lastChar = value.charAt(value.length - 1)
    if (operators.includes(lastChar) && operators.includes(text)) return

    setValue((value) => {
      return value + text
    })
  }

  const handleResult = () => {
    let result = eval(value)
    setPrevious(value)
    setValue(result.toString())
  }

  return (
    <Box backgroundColor='#ffa0a0' height='100%'>
      <Title content='Calculator' />
      <Display previous={previous} value={value} />
      <ListButton handleClick={handleClick} handleResult={handleResult} />
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  )
}
