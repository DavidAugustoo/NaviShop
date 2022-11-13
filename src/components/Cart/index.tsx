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

export function Cart() {
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
            {/* <p>Parece que seu carrinho está vazio :C</p> */}

            <CartProduct>
              <CartProductImage>
                <Image
                  src="https://s3-alpha-sig.figma.com/img/fd95/f0b2/85d51884517403ad7e3fc5c12726f99a?Expires=1668988800&Signature=SwmYSFsPLMVNRqB0Z7gEd1eFGNCvaIsEhay5634MVcgxh9vUAy1lQfVpTDB~G8L8ooCrORJFYZpzQzF8gWCEq2RDdnhpSBu6wj1nma4YXw1c79y5vdhDbNs53DpJ8-vRNggNtSmqOfp9NxG435z~D3xOaIrfK1gbS-kzCfQZHhIw7FXNyBaoaN3AMA8V1rXKmh~IkbIgnfqeMo40Zqa~qFVLJ-u3MLV0o~iNBsJ8Y3Cst4j95eqIM~-Zgf9jipt0rJPTG9KPoI13pHWxKYKEcSzBzXVBbTdN9q7Wc3EDVIfLJ5odwWePn-8u4nN8qRrCRW7SMQnnr58GXs37sjw79Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  width={100}
                  height={93}
                  alt=""
                />
              </CartProductImage>

              <CartProductDetails>
                <p>Produto 1</p>
                <span>R$ 50,00</span>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>

              <div>
                <span>Valor Total</span>
                <p>R$ 89,00</p>
              </div>
            </FinalizationDetails>

            <button>Finalizar Compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
