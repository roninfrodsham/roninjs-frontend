import { InformationCircleIcon } from "@heroicons/react/24/solid";

function PageLayout({ Component }: { Component: React.FunctionComponent }) {
  return (
    <div className='grow flex justify-center items-center'>
      <InformationCircleIcon className='absolute top-6 right-6 w-10 h-10 text-ronin-green-900' />
      <div className='w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4'>
        <Component />
      </div>
    </div>
  );
}

export { PageLayout };
