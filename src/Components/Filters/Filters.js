import { Button, Form } from "react-bootstrap"
import styles from "../Filters/Filters.module.scss"

const Filters = () => {
    return (
        <div className={styles.filters}>
            <span className={styles.title}>Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                />
            </span>
            {/* <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating rating={byRating} styles={{ cursor: "pointer" }} />
            </span> */}
            <Button variant="light">Clear Filters</Button>
        </div>
    )
}

export default Filters
