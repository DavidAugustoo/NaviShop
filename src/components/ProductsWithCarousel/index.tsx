import Image from 'next/image'
import { CartButton } from '../CartButton'
import { ProductSkeleton } from '../ProductSkeleton'
import {
  HomeContainer,
  SliderContainer,
  Product,
  ProductsWithCarouselContainer,
} from './styles'
import useEmblaCarousel from 'embla-carousel-react'
import { IProduct } from '../../context/CartContext'
import { MouseEvent } from 'react'

interface ProductsWithCarouselProps {
  products: IProduct[]
  isLoading: boolean
  handleAddToCart: (e: MouseEvent<HTMLButtonElement>, product: IProduct) => void
  checkIfItemAlreadyExists: (productId: string) => boolean
}

export function ProductsWithCarousel({
  products,
  isLoading,
  handleAddToCart,
  checkIfItemAlreadyExists,
}: ProductsWithCarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <ProductsWithCarouselContainer
      style={{ overflow: 'hidden', width: '100%' }}
    >
      <HomeContainer>
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__container container">
            {isLoading ? (
              <>
                <ProductSkeleton className="embla__slide" />
                <ProductSkeleton className="embla__slide" />
                <ProductSkeleton className="embla__slide" />
                <ProductSkeleton className="embla__slide" />
                <ProductSkeleton className="embla__slide" />
              </>
            ) : (
              <>
                {products.map((product) => (
                  <Product
                    className="embla__slide"
                    key={product.id}
                    href={`/product/${product.id}`}
                    prefetch={false}
                    passHref
                  >
                    <Image
                      src={product.imageUrl}
                      width={520}
                      height={480}
                      alt=""
                      placeholder="blur"
                      blurDataURL={product.imageUrl}
                    />

                    <footer>
                      <div>
                        <strong>{product.name}</strong>
                        <span>{product.price}</span>
                      </div>
                      <CartButton
                        size="large"
                        color="green"
                        disabled={checkIfItemAlreadyExists(product.id)}
                        onClick={(e) => handleAddToCart(e, product)}
                      />
                    </footer>
                  </Product>
                ))}
              </>
            )}
          </SliderContainer>
        </div>
      </HomeContainer>
    </ProductsWithCarouselContainer>
  )
}
