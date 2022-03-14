import React from "react";
import styles from "../styles/Portfolio.module.scss";
import Link from "next/link";
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
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/new-openings/lilys-vegetarian-indian-chorlton-deli/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/lilys.jpeg"
                  alt="A display counter with Indian snacks and sweets"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Lily's deli opens in Chorlton</h4>
              <p>
                "We are just so blessed, aren't we? ... You know, we appreciate
                all of our customers and it's just fantastic that we've been
                able to do it in lockdown."
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/new-openings/launched-in-lockdown/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/launchedlockdown.png"
                  alt="A split image showing a pastrami sandwich on the left and a stack of ice cream sandwiches on the right"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Launched in Lockdown</h4>
              <p>
                A guide to just some of the many Manchester food and drink
                projects that launched through lockdowns and Covid uncertainty
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://peopleactivation.com/resources/three-ways-meditation-can-improve-your-working-day"
                target="_blank"
              >
                <img
                  src="/img/portfolio/yogamed.jpg"
                  alt="A person sat cross legged with candles, incense and rocks in front of her"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Three ways meditation can improve your working day</h4>
              <p>
                Meditation is more than just about deep breathing. Studies have
                shown that meditation can actually change the shape of our brain
                and could even cause it to reverse age.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/culture/the-salford-burger-kitchen-that-can-get-more-than-1000-orders-a-day/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/burgerism.jpg"
                  alt="A row of cheese burgers being put together"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>The burger kitchen doing 1000 orders a day</h4>
              <p>
                Burgerism launched in April 2018, a delivery-only burger concept
                based in a warehouse in Salford, aiming to offer customers “the
                best off-premises burger in your neighbourhood”.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/new-openings/award-winning-bartender-brothers-open-schofields-bar-whose-classic-cocktails-have-drawn-huge-queues/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/schofields.jpg"
                  alt="Bartender pours prosecco into a cocktail"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Schofield brothers open Manchester bar</h4>
              <p>
                The award-winning bartender brothers open Schofield’s Bar –
                whose classic cocktails have drawn two-hour queues
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/news/eat-well-manchester-restaurant-charity/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/eatwell.jpg"
                  alt="Two men wearing hi-vis vests hold crates with meal deliveries"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>
                Eat Well provides 40,000 meals to the vulnerable in Manchester
              </h4>
              <p>
                “Life is going back to normal but it isn’t for these people” –
                the restaurant-run non-profit feeding Manchester’s most
                vulnerable
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/news/things-to-eat-and-drink-when-its-sunny-in-manchester/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/heatwave.png"
                  alt="A split image showing cocktails on the left and a stack of ice cream sandwiches on the right"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Things To Eat And Drink When It’s Sunny In Manchester</h4>
              <p>
                Ice cream, margaritas, summery dishes and more - all the good
                stuff to enjoy in the heat
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.eatmcr.co.uk/news/meatco-manchester-meat-delivery-service/"
                target="_blank"
              >
                <img
                  src="/img/portfolio/meatco.jpg"
                  alt="Two women - the owners of MeatCo Manchester"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>MeatCo launches quality meat delivery service</h4>
              <p>
                You don’t have to go vegan to eat more sustainably – the two
                Manchester women changing the way we think about meat
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.ladbible.com/community/animals-feels-inspirational-pensioner-has-loving-bond-with-friendship-dog-20201207"
                target="_blank"
              >
                <img
                  src="/img/portfolio/friendshipdog.jpg"
                  alt="A white dog runs through the grass"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Charity provides 'friendship dogs' to the elderly</h4>
              <p>
                National Lottery funded project Wag and Co organises visits from
                'friendship dogs' to older people. A branded content piece on
                LADbible for The National Lottery
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.ladbible.com/technology/feels-the-most-annoying-posts-on-social-media-as-voted-for-by-you-20201104"
                target="_blank"
              >
                <img
                  src="/img/portfolio/selfie.jpg"
                  alt="Two women taking a selfie"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>The Most Annoying Posts On Social Media</h4>
              <p>
                The posts that grind your gears on social media, based on a poll
                of more than 26,000 people. A branded content article for
                LADbible.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.manchestereveningnews.co.uk/news/greater-manchester-news/untold-umbro-sports-brand-manchester-15863579"
                target="_blank"
              >
                <img
                  src="/img/portfolio/umbro.jpg"
                  alt="Liam Gallagher wearing an Umbro jacket"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>The untold Mancunian story of Umbro</h4>
              <p>
                How two brothers went from a cupboard in a pub to kitting out
                England's heroes... and our Liam
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://peopleactivation.com/resources/six-personality-types-you-need-to-create-an-effective-team"
                target="_blank"
              >
                <img
                  src="/img/portfolio/coworking.jpg"
                  alt="Four people sat around a table working on laptops"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>
                Six personality types you need to create an effective team
              </h4>
              <p>
                A well-functioning team is one that has a mix of different
                personalities and, crucially, one where there is an
                understanding of how these people fit into a team dynamic.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://peopleactivation.com/resources/the-challenge-of-merging-how-virgin-and-o2-can-successfully-ride-the-wave-of"
                target="_blank"
              >
                <img
                  src="/img/portfolio/train.jpg"
                  alt="Two train tracks merging "
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>
              The challenge of merging
              </h4>
              <p>
              How businesses like Virgin and O2 can successfully ride the wave of transformation and change.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card} variants={item}>
            <div className={styles.image}>
              <a
                href="https://www.manchestereveningnews.co.uk/news/nostalgia/trafford-centre-15116417"
                target="_blank"
              >
                <img
                  src="/img/portfolio/trafford.png"
                  alt="An aerial view of the Trafford Centre location before it was built"
                />
              </a>
            </div>
            <div className={styles.description}>
              <h4>
              The Trafford Centre turns 20
              </h4>
              <p>
              A look at how it took shape and what happens next
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
