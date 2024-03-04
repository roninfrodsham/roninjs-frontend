import { useState } from "react";
import { motion } from "framer-motion";
import { useDocumentTitle } from "usehooks-ts";
import { PageLayout } from "../components/PageLayout";
import { Simon } from "../components";
import { InfoBox } from "../components";
import { InfoBoxHeader } from "../components/Infobox/components/InfoBoxHeader";

const whileHover = {
  backgroundColor: "#eeabce",
  scale: 1.1,
  transition: {
    duration: 0.01,
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

function Info({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <InfoBox isOpen={isOpen}>
      <InfoBoxHeader title='Simon' isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='grow'>
        <p className='pt-5 font-roboto text-ronin-pink text-md'>
          Simon is a classic memory game and inspired by the nostalgic charm of the original 1980s game, I embarked on a
          journey to recreate the beloved experience of playing Simon with my sister. With a desire to capture the
          essence of the retro era
        </p>
        <p className='pt-4 font-roboto text-ronin-pink text-md'>
          In Simon, players are challenged to remember and repeat a sequence of colored lights and sounds. The game
          starts with a simple sequence, but with each successful repetition, it becomes increasingly complex, testing
          the player's memory and concentration skills. By clicking on colored buttons in the correct sequence, players
          aim to achieve the highest score possible and challenge themselves to beat their own records.
        </p>
        <p className='pt-4 font-roboto text-ronin-pink'>Technology stack:</p>
        <ul className='list-disc pl-8 pt-4 font-roboto text-ronin-pink'>
          <li>React</li>
          <li>TypeScript</li>
          <li>HTMLAudioElement</li>
          <li>CSS</li>
          <li>Cloudflare Pages</li>
        </ul>
        <p className='pt-4 font-roboto text-ronin-pink'>
          I plan to further enhance the game by integrating the Web Audio API for the sound effects and gained valuable
          experience building Simon, honing my problem-solving skills, and above all, had fun bringing a nostalgic
          childhood memory to life.
        </p>
      </div>
      <div className='pt-6 flex flex-row'>
        <motion.a
          href='https://github.com/roninfrodsham/simon-memory-game'
          className='flex-auto mr-6 pt-3 pb-2 block bg-ronin-green-300 text-ronin-green-900 font-bebas text-xl text-center'
          whileHover={whileHover}
        >
          Github Repo
        </motion.a>
        <motion.a
          href='https://github.com/users/roninfrodsham/projects/7'
          className='flex-auto pt-3 pb-2 bg-ronin-green-300 text-ronin-green-900 font-bebas text-xl text-center'
          whileHover={whileHover}
        >
          Github Project
        </motion.a>
      </div>
    </InfoBox>
  );
}

const classes = "w-50 flex justify-center";

function SimonMemoryGame() {
  useDocumentTitle("Synthesiser built in React and TypeScript using Web Audio API - RoninJS");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageLayout Component={Simon} slideBtnText='Project Info' setIsOpen={setIsOpen} isOpen={isOpen} classes={classes}>
      <Info isOpen={isOpen} setIsOpen={setIsOpen} />
    </PageLayout>
  );
}

export { SimonMemoryGame };
