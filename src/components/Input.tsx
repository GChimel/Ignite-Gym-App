import { Input as NativeBaseInput, IInputProps } from 'native-base'; //inportando utilizando alias para não ter conflito

export function Input({...rest}: IInputProps) {
  return(
    <NativeBaseInput
      bg='gray.700'
      h={14} //altura
      px={4} //padding horizontal
      mb={4} //margin bottom
      borderWidth={0}
      fontSize='md'
      color='white'
      fontFamily='body'
      placeholderTextColor='gray.300'
      _focus={{
        bg: 'gray.700',
        borderWidth: 1,
        borderColor: 'green.500'
      }}
      {...rest} //rest sempre tem que ser o último
    />
  );
}