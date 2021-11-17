import { CartState } from "../../Context/Context"
import Product from "../Product/Product"
import styles from "../Home/Home.module.scss"
import Filters from "../Filters/Filters";

const Home = () => {
   const { state: { products },
           productState: { sort, byStock, byFastDelivery, byRating, searchQuery }
         } = CartState();
   const transformProducts = () => {
       let sortedProducts = products
       if(sort) {
           sortedProducts = sortedProducts.sort((a,b) => 
            sort === "lowToHigh" ? 
             a.price - b.price : b.price - a.price
           )
       }
       return sortedProducts
   }
    return (
        <div className={styles.home}>
         <Filters/>
         <div className={styles.productContainer}>
           {
               transformProducts(products).map((product) => {
                  return <Product product={product} key={product.id}/>
               })
           }
         </div>
        </div>
    )
}

export default Home
