import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from '../CartButton'
import {
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from './styles'
import { X } from 'phosphor-react'
import Image from 'next/image'
import { useCart } from '../../hooks/useCart'

export function Cart() {
  const { cartItems, removeCartItems, cartTotal } = useCart()
  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio :C</p>}

            {cartItems.map((cartItem) => {
              return (
                <CartProduct key={cartItem.id}>
                  <CartProductImage>
                    <Image
                      src={cartItem.imageUrl}
                      width={100}
                      height={93}
                      alt=""
                    />
                  </CartProductImage>

                  <CartProductDetails>
                    <p>{cartItem.name}</p>
                    <span>{cartItem.price}</span>
                    <button onClick={() => removeCartItems(cartItem.id)}>
                      Remover
                    </button>
                  </CartProductDetails>
                </CartProduct>
              )
            })}
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartQuantity} {cartQuantity === 1 ? 'Item' : 'Items'}
                </p>
              </div>

              <div>
                <span>Valor Total</span>
                <p>{formattedCartTotal}</p>
              </div>
            </FinalizationDetails>

            <button>Finalizar Compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
