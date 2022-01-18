import Image from 'next/image'
import styles from '../styles/Cart.module.css'

export default function Cart() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td className={styles.imgContainer}>
                            <Image src="/img/pizza.png" alt="pizza" layout='fill' objectFit='cover' />
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredients, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.imgContainer}>
                            <Image src="/img/pizza.png" alt="pizza" layout='fill' objectFit='cover' />
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredients, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <strong className={styles.totalTextTitle}>Subtotal:</strong>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <strong className={styles.totalTextTitle}>Discount:</strong>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <strong className={styles.totalTextTitle}>Total:</strong>$79.60
                    </div>
                    <button className={styles.button}>CHECKOUT NOW!</button>
                </div>
            </div>

        </div>
    )
}
