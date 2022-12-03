import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCart } from '../../hooks/useCart'
import { IProduct } from '../../context/CartContext'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { addToCart, checkIfItemAlreadyExists } = useCart()

  if (isFallback) {
    return <p>Loading...</p>
  }

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id)

  return (
    <>
      <Head>
        <title>{product.name} | Navi Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            disabled={itemAlreadyInCart}
          >
            {itemAlreadyInCart
              ? 'Produto já está no carrinho'
              : 'Colocar no carrinho'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params ? params.id : 'prod_MuthWy98cso5hc'

  const product = await stripe.products.retrieve(productId as string, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount as number) / 100),
        description: product.description,
        numberPrice: (price.unit_amount as number) / 100,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
