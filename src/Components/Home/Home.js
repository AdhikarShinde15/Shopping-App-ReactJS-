import { CartState } from "../../Context/Context"
import Product from "../Product/Product"
import styles from "../Home/Home.module.scss"
import Filters from "../Filters/Filters";

const Home = () => {
   const { state: { products } } = CartState();
    return (
        <div className={styles.home}>
         <Filters/>
         <div className={styles.productContainer}>
           {
               products.map((product) => {
                  return <Product product={product} key={product.id}/>
               })
           }
         </div>
        </div>
    )
}

export default Home
