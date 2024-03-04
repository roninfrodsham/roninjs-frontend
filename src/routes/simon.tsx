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
          This project was built as a prototype to test the Web Audio API. It's a simple synthesiser that uses the Web
          Audio API to play an oscillator at different frequencies.
        </p>
      </div>
      <div className='pt-6 flex flex-row'>
        <motion.a
          href='https://github.com/roninfrodsham/synthesiser'
          className='flex-auto mr-6 pt-3 pb-2 block bg-ronin-green-300 text-ronin-green-900 font-bebas text-xl text-center'
          whileHover={whileHover}
        >
          Github Repo
        </motion.a>
        <motion.a
          href='https://github.com/users/roninfrodsham/projects/5'
          className='flex-auto pt-3 pb-2 bg-ronin-green-300 text-ronin-green-900 font-bebas text-xl text-center'
          whileHover={whileHover}
        >
          Github Project
        </motion.a>
      </div>
    </InfoBox>
  );
}

const classes = "flex jusitfy-center";

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
