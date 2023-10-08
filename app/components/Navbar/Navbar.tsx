import Logo from "../Logo";
import ThemeSwitch from "../ThemeSwitch";
import NavLinksGroup from "./NavLinksGroup";

export default function Navbar() {
  return (
    <div
      className="fixed bg-neutral-500 bg-opacity-5 z-[9999] left-0 right-0"
      style={{
        backdropFilter: "blur(10px) contrast(100%)",
        backgroundBlendMode: "overlay",
        WebkitBackdropFilter: "blur(10px) contrast(100%)",
      }}
    >
      <div className="mx-auto py-4 md:py-4 container xl:max-w-7xl px-6">
        <div className="w-full flex flex-row gap-2 md:gap-0 justify-between items-center">
          <Logo size="small"></Logo>
          <div className="flex flex-row justify-center md:justify-end items-center max-w-full">
            <NavLinksGroup></NavLinksGroup>
            <ThemeSwitch></ThemeSwitch>
          </div>
        </div>
      </div>
    </div>
  );
}
