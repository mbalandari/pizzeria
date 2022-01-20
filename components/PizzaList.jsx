import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

export default function PizzaList({ pizzaList }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias repudiandae debitis? Rerum architecto consequatur iure ducimus, et quos illum dicta aspernatur debitis officia dignissimos eos aperiam adipisci commodi neque.</p>
            <div className={styles.wrapper}>
                {pizzaList.map(pizza => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    )
}
