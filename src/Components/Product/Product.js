import { Button, Card } from "react-bootstrap"
import { CartState } from "../../Context/Context"
import styles from "../Product/Product.module.scss"
import Rating from "../Rating/Rating"

const Product = ({ product }) => {
    const { state: { cart }, dispatch } = CartState()
    return (
        <div className={styles.product}>
            <Card>
                <Card.Img variant="top" 
                          src={ product.image } 
                          alt={product.name}/>
                 <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle style={{ paddingBottom: 10 }}>
                      <span>₹ {product.price.split(".")[0]}</span>
                      {
                          product.fastDelivery ? (
                              <div>Fast Delivery</div>
                          ):
                          (
                              <div>4 Days Delivery</div>
                          )
                      }
                      <Rating rating={product.ratings}/>
                  </Card.Subtitle>
                  {
                      cart.some(p => p.id === product.id) ?
                       (<Button variant="danger"
                                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}
                        >Remove from Cart</Button>)
                        : (
                            <Button disabled={!product.inStock}
                                    onClick={() => dispatch({ type : "ADD_TO_CART", payload: product })}
                            >
                            {!product.inStock ? "Out of Stock" : "Add to Cart"}</Button>
                        )
                  }
                 
                 </Card.Body>         
            </Card>
        </div>
    )
}

export default Product
