import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { Synth } from "../components";
import { InfoBox } from "../components";
import { InfoBoxHeader } from "../components/Infobox/components/InfoBoxHeader";

function Info({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <InfoBox isOpen={isOpen}>
      <InfoBoxHeader title='Synthesiser' isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='grow'>
        <p className='pt-5 font-roboto text-ronin-pink text-md'>
          This project was built as a prototype for a client, it's a simple synthesiser that uses the Web Audio API to
          play an oscillator at different frequencies.
        </p>
        <p className='pt-4 font-roboto text-ronin-pink'>
          To work out the frequency for each note I used this website which suggested a formula for musical notes. I
          chose the lowest C note as the starting point and then multiplied it by 2^(n/12) where n is the number of keys
          including semitones away from the starting note.
        </p>
        <p className='pt-4 font-roboto text-ronin-pink'>The project uses the following technologies:</p>
        <ul className='list-disc pl-8 pt-4 font-roboto text-ronin-pink'>
          <li>React</li>
          <li>TypeScript</li>
          <li>Web Audio API</li>
          <li>Vitest</li>
          <li>Cloudflare Pages</li>
        </ul>
      </div>
      <div className='pt-6 flex flex-row'>
        <button className='flex-auto mr-4 py-2 block bg-ronin-pink text-ronin-green-900 font-bebas text-xl'>
          Github Repo
        </button>
        <button className='flex-auto block bg-ronin-pink text-ronin-green-900 font-bebas text-xl'>
          Github Project
        </button>
      </div>
    </InfoBox>
  );
}

function Synthesiser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageLayout Component={Synth} slideBtnText='Project Info' setIsOpen={setIsOpen} isOpen={isOpen}>
      <Info isOpen={isOpen} setIsOpen={setIsOpen} />
    </PageLayout>
  );
}

export { Synthesiser };
