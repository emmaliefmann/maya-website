import React from "react";
import Link from 'next/link';
import styles from "../styles/Portfolio.module.scss";

import { motion } from "framer-motion";

const portfolioPage = () => {
  const container = {
    hidden: { opacity: 0.5, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
        delayChildred: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  // const filterHandler = (category) => {
  //   console.log(category);
  // };
  return (
    <>
      <header className={styles.header}>
        <h1>Portfolio</h1>
        <p>
          Here is a selection of some of my articles including food writing,
          features, branded content and blogs.
        </p>
      </header>
      <div className={styles.container}>
        {/* pull categories from DB */}
        {/* <div className={styles.categories}>
          <button onClick={() => filterHandler("all")}>ALL</button>
          <button onClick={() => filterHandler("articles")}>ARTICLES</button>
          <button onClick={() => filterHandler("branded-content")}>
            BRANDED CONTENT
          </button>
        </div> */}

        <div className={styles.cardCtn}>
          <motion.div
            className={styles.card}
            variants={item}
            initial="hidden"
            animate="show"
          >
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/news/the-food-and-drink-businesses-thriving-at-pollard-yard/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/pollardyard.jpeg"
                  alt="A collection of brightly coloured shipping containers in the shadow of an old mill"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>The food and drink businesses thriving at Pollard Yard</h4>
              <p>
                Speaking to some of the businesses at small business hub Pollard
                Yard - a place where creativity oozes out of every perfectly
                painted shipping container
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            variants={item}
            initial="hidden"
            animate="show"
          >
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/culture/new-lockdown-baking-business-manchester/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/homebakers.jpeg"
                  alt="A woman in a bakery"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>The Rise of the Home Bakers</h4>
              <p>
                The people who turned baking from a hobby into a profession
                during lockdown
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            variants={item}
            initial="hidden"
            animate="show"
          >
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/culture/celebrate-hannukah-festival-manchester-food/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/chanukkah.jpg"
                  alt="Sugared donuts on a glass plate with a pair of serving tongs."
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Celebrating Hanukkah in Manchester</h4>
              <p>
                Some of the best things to eat and drink in Manchester during
                the festival of light (and deep fried food)
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            variants={item}
            variants={item}
            initial="hidden"
            animate="show"
          >
            <div className={styles.image}>
              <a
                href="https://www.ladbible.com/community/sport-expert-shares-biggest-tips-to-keep-you-running-over-winter-20201204"
                target="_blank"
              >
                <img
                  src="/img/portfolio/runnersport.jpg"
                  alt="The legs of a runner running along a road"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Winter running tips</h4>
              <p>
                "Expert Shares Biggest Tips To Keep You Running Over Winter" - a
                branded content piece on LADbible for Brooks
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            variants={item}
            variants={item}
            initial="hidden"
            animate="show"
          >
            <div className={styles.image}>
              <a
                href="https://www.ladbible.com/entertainment/tv-and-film-prison-break-voted-greatest-classic-tv-series-finale-on-disney-20210318?c=1616164092039"
                target="_blank"
              >
                <img
                  src="/img/portfolio/disney.jpg"
                  alt="A TV on a stand with Disney+ showing on screen"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Greatest series finale of all time</h4>
              <p>
                "Prison Break Voted 'Greatest Classic TV Series Finale' On Star
                On Disney+" - a branded content piece on LADbible for Star on
                Disney+
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            variants={item}
            variants={item}
            initial="hidden"
            animate="show"
          >
            <div className={styles.image}>
              <a
                href="https://peopleactivation.com/resources/no-points-for-busy-how-to-manage-energy-not-time"
                target="_blank"
              >
                <img src="/img/portfolio/underground.jpg" />
              </a>
            </div>
            <div className={styles.description}>
              <h4>No points for busy: how to manage energy not time</h4>
              <p>
                Being busy is something that we often wear as a badge of pride.
                Endless to-do lists, frantic work days and feeling like there
                are never enough hours in the day - are we simply being busy
                fools?
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            variants={item}
            variants={item}
            initial="hidden"
            animate="show"
          >
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/new-openings/crown-kettle-pub-manchester-northern-quarter/"
                target="_blank"
              >
                <img src="/img/portfolio/crownandkettle.jpg" />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Step inside the new Crown and Kettle</h4>
              <p>
                A look inside the newly refurbished Crown and Kettle which has
                reopened under new management.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/new-openings/osma-prestwich-manchester-michelin-chef/"
                target="_blank"
              >
                <img src="/img/portfolio/osma.jpg" />
              </a>
            </div>
            <div className={styles.description}>
              <h4>OSMA opens in Prestwich</h4>
              <p>
                The new Scandinavian restaurant in Prestwich run by a
                Michelin-trained chef
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/news/manchester-foodbanks-charities-homeless-winter/"
                target="_blank"
              >
                <img src="/img/portfolio/foodbanks.jpg" />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Food banks prepare for toughest winter yet</h4>
              <p>
                The pandemic has had a huge impact on the organisations caring
                for the most vulnerable members of our community.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.manchestereveningnews.co.uk/special-features/simple-life-homes-rental-market-16003995"
                target="_blank"
              >
                <img
                  src="/img/portfolio/simplelife.jpg"
                  alt="A view from above of new build houses"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Five reasons why you DON'T need to buy a house</h4>
              <p>
                The benefits of not being a homeowner. A branded content piece
                on Manchester Evening News for Simple Life Homes.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://peopleactivation.com/resources/its-okay-not-to-be-okay-how-empathy-can-strengthen-a-team"
                target="_blank"
              >
                <img
                  src="/img/portfolio/feelgoodclub2.png"
                  alt="Two women standing in front of a billboard which reads 'The World is a better place with you in it'"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>
                It’s okay not to be okay - how empathy can strengthen a team
              </h4>
              <p>
                Taking inspiration from Manchester-based mental health
                advocates, Feel Good Club who give realistic advice on taking
                care of your mental health.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/news/manchester-pubs-bars-tier-3/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/beertaps.jpg"
                  alt="A row of beer taps"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Can pubs and bars survive Tier 3?</h4>
              <p>
                Speaking to various pub landlords and business owners about the
                impact of Tier 3 restrictions on their businesses
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.manchestereveningnews.co.uk/news/property/new-islington-urban-splash-regeneration-15520086"
                target="_blank"
              >
                <img
                  src="/img/portfolio/cardroom.jpg"
                  alt="A view from above of new build houses"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Before Ancoats was Ancoats: The Cardroom Estate</h4>
              <p>
                Goodbye to the old council estate - the pictures that captured
                an inner city district on the cusp of massive change
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/new-openings/ramona-manchester-detroit-style-pizza/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/ramona.jpg"
                  alt="The inside of an old MOT garage where which is being renovated to become a pizza restaurant"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Detroit-style pizzeria to open in former garage</h4>
              <p>
                Ramona to open in Manchester bringing Detroit-style pizza to the
                Northern Quarter
              </p>
            </div>
          </motion.div>
        </div>
        <div className={styles.pagination}>
          <Link href="/portfolio">&laquo;</Link>
          <Link href="/portfolio2">&raquo;</Link>
        </div>
      </div>
    </>
  );
};

export default portfolioPage;
