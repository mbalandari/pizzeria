import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

export default function PizzaCard() {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="pizza" width="500px" height="500px" />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, sed.</p>
        </div>
    )
}
