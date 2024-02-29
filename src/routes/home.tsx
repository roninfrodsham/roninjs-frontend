import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { Ronin } from "../components";
import { InfoBox } from "../components";
import { InfoBoxHeader } from "../components/Infobox/components/InfoBoxHeader";

function Info({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <InfoBox isOpen={isOpen}>
      <InfoBoxHeader title='Bio' isOpen={isOpen} setIsOpen={setIsOpen} />
      <p className='pt-5 font-roboto text-ronin-pink text-md'>
        Hi there! I'm Jonny Frodsham, a seasoned freelance software engineer with over two decades of experience,
        specialising in frontend development using JavaScript, React, TypeScript and Node, I am deeply passionate about
        crafting seamless and intuitive user interfaces.
      </p>
      <p className='py-4 font-roboto text-ronin-pink text-md'>
        Most of my work is under NDA so this site is a collection of experiments and prototypes for you to enjoy.
      </p>
      <h2 className='pt-4 font-bebas text-ronin-pink text-3xl'>Clients</h2>
      <p className='pt-4 font-roboto text-ronin-pink'>Amongst many others I've had the pleasure to work with:</p>
      <p className='pb-4 font-roboto text-ronin-pink'>
        Skybet, Bet 365, Sanofi, Astra Zeneca, Dow Corporation, BBC, Virgin, Adidas, The Singleton, Waterstones, HMV,
        British Swimming, Manchester United, Lancashire Cricket Club, Bostik, BluTack, Seabrook Crisps
      </p>
      <h2 className='pt-4 font-bebas text-ronin-pink text-3xl'>Awards</h2>
      <p className='pt-4 font-roboto text-ronin-pink'>
        In my various positions, I've been honoured to receive recognition from prestigious organisations such as The
        Roses, Big Chip, PM Society, Creative Floor, and Communiqué for my outstanding work in developing innovative
        digital solutions. One particularly special moment was heading up the digital team for Havas Lynx when we
        clinched the Cannes Lions Healthcare Agency of the Year award in 2018.
      </p>
    </InfoBox>
  );
}

const classes = "w-3/4 sm:w-1/2 xl:w-1/3 2xl:w-1/4";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageLayout Component={Ronin} slideBtnText='Bio' setIsOpen={setIsOpen} isOpen={isOpen} classes={classes}>
      <Info isOpen={isOpen} setIsOpen={setIsOpen} />
    </PageLayout>
  );
}

export { Home };
