import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout='fill' alt="bg" objectFit='cover' />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>Lorem ipsum dosit amet consectetur adipisicing elit. Ip molestias quam.</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR PLACES</h1>
                    <p className={styles.text}>
                        1614 W. Caroll St #125.
                        <br /> NewYork, 85201
                        <br /> (123) 456-7890
                    </p>
                    <p className={styles.text}>
                        1614 W. Caroll St #125.
                        <br /> NewYork, 85201
                        <br /> (123) 456-7890
                    </p>
                    <p className={styles.text}>
                        1614 W. Caroll St #125.
                        <br /> NewYork, 85201
                        <br /> (123) 456-7890
                    </p>
                    <p className={styles.text}>
                        1614 W. Caroll St #125.
                        <br /> NewYork, 85201
                        <br /> (123) 456-7890
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}
