import { XMarkIcon } from "@heroicons/react/24/solid";

type InfoBoxHeaderProps = {
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function InfoBoxHeader({ title, isOpen, setIsOpen }: InfoBoxHeaderProps) {
  return (
    <div className='flex flex-row items-center'>
      <h2 className='grow font-bebas text-ronin-pink text-3xl'>{title}</h2>
      <button onClick={() => setIsOpen(!isOpen)}>
        <XMarkIcon className='w-8 h-8 text-ronin-pink' />
      </button>
    </div>
  );
}

export { InfoBoxHeader };
