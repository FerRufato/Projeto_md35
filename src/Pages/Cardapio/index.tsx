import { useParams } from 'react-router-dom'

import HeaderStore from '../../components/HeaderStore'
import ProductListStore from '../../components/ProductsListStore'
import Banner from '../../components/BannerInt'

import { useGetMenuQuery } from '../../Services/api'
import Loader from '../../components/Loader'

const Product = () => {
  const { id } = useParams()

  const { data: cardapio } = useGetMenuQuery(id!)

  if (!cardapio) {
    return <Loader />
  }

  return (
    <>
      <HeaderStore />
      <Banner banner={cardapio} />
      <ProductListStore menu={cardapio} />
    </>
  )
}

export default Product
