import React from "react";
import styles from "./FantasyFootball.module.css";

const FantasyFootball = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Fantasy Football</h1>
        <p>
          Dream11 Fantasy Football is ideal for both beginners and fantasy pro players, where players can showcase their skills in real-world matches.
        </p>
      </header>
      <section className={styles.section}>
        <h2>What is Fantasy Football?</h2>
        <p>
          Fantasy football is an online gaming tournament where you create a virtual team of 11 players and get to compete with teams of other fantasy players. As a player, you must choose the top 11 players in your team who can win maximum points with their performance as midfielders, goalkeepers, defenders, and strikers.
        </p>
      </section>
      <section className={styles.section}>
        <h2>History of Fantasy Football in India</h2>
        <p>
          First introduced in 2008, Dream11 is India's first-ever company that came up with the concept of "fantasy sports." in India. As time passed, the platform grew from a million in 2014 to 45 million in 2018 and, finally, 130 million at present.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Fantasy Football Rules</h2>
        <ul>
          <li>
            Each football team made on Dream11 features 11 players. Out of the 11 players, a maximum of 7 players can be from any one team.
          </li>
          <li>
            Selecting captain and vice-captain is critical as they earn extra points based on their performance.
          </li>
          <li>
            Points are awarded for goals, assists, saves, and other metrics like clean sheets and tackles won.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Tips to Win Fantasy Football</h2>
        <ul>
          <li>Keep an eye on player statistics and past performances.</li>
          <li>Plan your strategies and be ready to rotate players.</li>
          <li>Pick matches wisely and avoid relying on untrusted sources.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Why Should You Play Fantasy Football?</h2>
        <p>
          Fantasy football is all about meticulous planning, and at Dream11, our match analysis will help you plan better. You can win exciting rewards, including cash bonuses, merchandise, and travel passes.
        </p>
      </section>
    </div>
  );
};

export default FantasyFootball;
