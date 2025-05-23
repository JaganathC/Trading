import styles from "../style";
import { discount, robot, card } from "../assets";
import GetStarted from "./GetStarted";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[32px] text-white ss:leading-[50.8px] leading-[25px]">
          Master the Stock Market Risk-Free <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Simulate, Learn, and Invest with Confidence!</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to={'/login'}> <GetStarted /></Link>
            
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A SaaS-based stock market simulation platform that helps new investors practice trading with digital coins, offering personalized guidance, contests, and leaderboards. Users can improve their skills risk-free and seamlessly transition to real investments through partner apps like StockEdge.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[80%] h-[90%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
