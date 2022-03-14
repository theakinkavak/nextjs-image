import Head from "next/head";
import styles from "../styles/Home.module.scss";
import logo from "../styles/2.png";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([]);
  const [pics, setPics] = useState([]);
  const [won, setWon] = useState(false);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  //shuffling and adding special id
  function shufflePics() {
    const shuffledPics = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((pic) => ({
        ...pic,
        sid: uuidv4(),
        matched: false,
      }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setPics(shuffledPics);
    setWon(false);
  }

  //check for turns
  function clickHandler(pic) {
    if (!isDisabled) {
      choiceOne ? setChoiceTwo(pic) : setChoiceOne(pic);
    }
  }

  //reset turns to default and increment turn by 1
  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setIsDisabled(false);
  }

  //Fetch on mount for pics
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=8")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //Check for winning
  useEffect(() => {
    if (pics.length !== 0 && pics.every((pic) => pic?.matched)) {
      setWon(true);
    }
  }, [pics]);

  //Turns logic
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setIsDisabled(true);
      if (choiceOne.id === choiceTwo.id) {
        resetTurn();
        setPics((prev) => {
          return prev.map((card) => {
            if (card.id === choiceOne.id) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        setTimeout(() => {
          resetTurn();
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.title}> Matching Game</title>
      </Head>

      <main className={styles.main}>
        <button className={styles.newGameBtn} onClick={shufflePics}>
          Start New Game
        </button>
        <div>
          <h1 className={styles.title}>Matching Game</h1>
          <div className={styles.grid}>
            {turns === 25 ? (
              <h1 className={styles.turns}>You Lost!</h1>
            ) : !won ? (
              pics.map((pic) => {
                return (
                  <div key={pic.sid} className={styles.card}>
                    <div
                      onClick={() => {
                        pic.sid === choiceOne?.sid ? null : clickHandler(pic);
                      }}
                      className={
                        pic === choiceOne || pic === choiceTwo || pic.matched
                          ? styles.flipped
                          : ``
                      }
                    >
                      <Image
                        className={
                          pic === choiceOne || pic === choiceTwo || pic.matched
                            ? styles.flip
                            : ``
                        }
                        src={logo}
                        layout="fill"
                        alt="front image"
                      />
                      <img
                        className={
                          pic === choiceOne ? styles.flipped : styles.front
                        }
                        src={pic.download_url}
                        layout="fill"
                        alt="back image"
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h1 className={styles.congratz}>
                  Congratulations! <br /> You finished in{" "}
                  <span className={styles.turnsNumber}>{turns - 1}</span> turns.
                </h1>
              </div>
            )}
            {pics.length >= 1 && !won ? (
              <h1 className={styles.turns}>{`Turn: ${turns}/25`}</h1>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
