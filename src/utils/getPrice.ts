import { useSelector } from 'react-redux';
import { products } from '../store';

export function getPrice(productId) {
    const productsData = useSelector(products.selectors.productsData)

    // console.log("🚀 ~ file: Banner.tsx:18 ~ productsData:", productsData)
    if (productsData?.length > 0) {
        return productsData.find(p => p.id === productId)
    } else {
        return 0
    }
} 