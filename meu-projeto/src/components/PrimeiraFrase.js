import styles from './PrimeiraFrase.module.css'

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p>Este é um component com uma frase!</p>
    </div>
  )
}

export default Frase