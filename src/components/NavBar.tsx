import Link from "next/link";
import { ThemeChanger } from "./ThemeChanger";

export const NavBar = () => {
  return (
    <header className="flex justify-between items-center bg-WhiteLight px-4 sm:px-20 py-6 dark:bg-DarkModeDarkBlueElements">
      <Link href={"/"}>
        <h1 className="font-extrabold text-xl sm:text-2xl">
          Where in the World?
        </h1>
      </Link>
      <ThemeChanger />
    </header>
  );
};
