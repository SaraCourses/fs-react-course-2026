import { useEffect } from 'react'
import { getProducts } from '../../services/products.service'


const ProductsTable = () => {

    useEffect(() => {
        const init = async () => {
            await getProducts()
        }
        init()
    }, [])

    return <div>Product table</div>
}

export default ProductsTable
