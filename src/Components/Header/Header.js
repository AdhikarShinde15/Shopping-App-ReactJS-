import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap"
import { AiFillDelete } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CartState } from "../../Context/Context"
import styles from "../Header/Header.module.scss"

const Header = () => {
    const { state: { cart }, dispatch, productDispatch } = CartState()
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className={styles.search}>
                    <FormControl style={{ width: 500 }}
                        placeholder="Search For Products"
                        className="m-auto"
                        onChange={(e) => productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value
                        })
                    }
                    >
                    </FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge bg="success">{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                cart.length > 0 ? (
                                    <>
                                        {
                                            cart.map(product => (
                                                <span className={styles.cartItem} key={product.id}>
                                                    <img
                                                        src={product.image}
                                                        className={styles.cartItemImg}
                                                        alt={product.name}
                                                    />
                                                    <div className={styles.cartItemDetail}>
                                                        <span>{product.name}</span>
                                                        <span>₹ {product.price.split(".")[0]}</span>
                                                    </div>
                                                    <AiFillDelete
                                                        fontSize="20px"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => dispatch ({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: product
                                                        })}
                                                    />
                                                </span>
                                            ))
                                        }
                                        <Link to="/cart"> 
                                         <Button style= {{ width: "95%" , margin: "0 10pc"}}>
                                            Go to Cart
                                         </Button>
                                        </Link>
                                    </>
                                ) : (<span style={{ padding: 10 }} > Cart is Empty !</span>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
