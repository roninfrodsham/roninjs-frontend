import { NavigationList } from "./NavigationList";

type NavigationItems = {
  id: string;
  title: string;
  path: string;
}[];

function Navigation() {
  const PRIMARY_NAV_ITEMS: NavigationItems = [
    {
      id: "nav-item-1",
      title: "Synthesiser",
      path: "/",
    },
    {
      id: "nav-item-2",
      title: "Simon Memory Game",
      path: "/",
    },
    {
      id: "nav-item-3",
      title: "React Chess",
      path: "/",
    },
    {
      id: "nav-item-4",
      title: "Kabuto Masks",
      path: "/",
    },
  ];

  const SECONDARY_NAV_ITEMS: NavigationItems = [
    {
      id: "sec-nav-item-1",
      title: "Information",
      path: "/",
    },
  ];

  return (
    <>
      <NavigationList navigationItems={PRIMARY_NAV_ITEMS} ariaLabel='primary' classes='py-6 grow' />
      <NavigationList navigationItems={SECONDARY_NAV_ITEMS} ariaLabel='secondary' classes='py-6' />
    </>
  );
}

export { Navigation };
