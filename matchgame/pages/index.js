import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../styles/2.png";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [pics, setPics] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const myLoader = ({ src }) => {};

  ` https://unsplash.com/photos/SSxIGsySh8o`;
  // console.log(pics);

  function shufflePics() {
    const shuffledPics = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((pic) => ({ ...pic, id: Math.random() }));
    setPics(shuffledPics);
  }

  function clickHandler(card) {
    choiceOne ? setChoiceOne(card) : setChoiceTwo(card);
  }

  console.log(pics);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=8")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title> Matching Game</title>
      </Head>

      <main className={styles.main}>
        <button onClick={shufflePics}>test</button>
        <h1 className={styles.title}>Matching Game</h1>
        <div className={styles.grid}>
          {pics.map((pic) => {
            return (
              <div key={pic.id} className={styles.card}>
                <div>
                  <Image
                    loader={myLoader}
                    className="front-face"
                    src={pic.download_url}
                    layout="fill"
                    alt="unflipped image"
                  />
                  <Image
                    onClick={() => clickHandler(pic)}
                    className="back-face"
                    src="/test.ico"
                    layout="fill"
                    alt="flipped image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
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
