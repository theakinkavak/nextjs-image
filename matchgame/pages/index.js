import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from "../styles/2.png";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Matching Game</title>
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
        Matching Game
        </h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" layout="fill" />    
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>

          <div className={styles.card}>
            <Image className="front-face" src={logo} layout="fill" />
            <img className="back-face" src="" />  
          </div>         
        </div>
      </main>
      </div>
    
  )
}


/*
const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={}  />
      </div>
      <div className="card-face card-back-face">
        <img src={}  />
      </div>
    </div>
  );
};

export default Card;

*/