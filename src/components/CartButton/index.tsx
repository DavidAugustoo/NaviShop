import { Handbag } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CartButtonContainer, CartCount } from './styles'

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
  quantity?: number
}
export function CartButton({ quantity, ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <Handbag weight="bold" />
      {quantity && <CartCount>{quantity}</CartCount>}
    </CartButtonContainer>
  )
}
