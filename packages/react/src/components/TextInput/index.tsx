import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}
export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {
        !!prefix && <Prefix>{prefix}</Prefix> // botar !! transforma o valor em boleano
      }
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
