
import {card} from "../assets";

import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover better investment strategies  <br className="sm:block hidden" /> in just a few simple steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      A platform to practice stock trading, learn market trends, and enhance your investment skills risk-free.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[80%] h-[80%]" />
    </div>
  </section>
);

export default CardDeal;
