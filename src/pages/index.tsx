import Head from 'next/head'
import { GetStaticProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import { useCart } from '../hooks/useCart'
import { IProduct } from '../context/CartContext'
import { MouseEvent, useEffect, useState } from 'react'
import { ProductsWithCarousel } from '../components/ProductsWithCarousel'
import { ProductsWithoutCarousel } from '../components/ProductsWithoutCarousel'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // fake loading to use the skeleton loading from figma
    const timeOut = setTimeout(() => setIsLoading(false), 2000)

    return () => clearTimeout(timeOut)
  }, [])

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Navi Shop</title>
      </Head>
      <ProductsWithCarousel
        products={products}
        isLoading={isLoading}
        handleAddToCart={handleAddToCart}
        checkIfItemAlreadyExists={checkIfItemAlreadyExists}
      />
      <ProductsWithoutCarousel
        products={products}
        isLoading={isLoading}
        handleAddToCart={handleAddToCart}
        checkIfItemAlreadyExists={checkIfItemAlreadyExists}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
      numberPrice: (price.unit_amount as number) / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
