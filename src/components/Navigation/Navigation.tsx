import { NavigationList } from "./components/NavigationList";
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from "../../constants";

function Navigation() {
  return (
    <>
      <NavigationList navigationItems={PRIMARY_NAV_ITEMS} ariaLabel='primary' classes='py-6 grow' />
      <NavigationList navigationItems={SECONDARY_NAV_ITEMS} ariaLabel='secondary' classes='py-6' />
    </>
  );
}

export { Navigation };
