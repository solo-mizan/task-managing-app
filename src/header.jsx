import { GoTasklist } from "react-icons/go";

export default function Header() {
  return (
    <nav className="py-3 md:py-4 fixed top-0 w-full !bg-[#172341] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-4">
        <a href="/">
          <p className="h-[45px] text-4xl">
            <GoTasklist className=""/>
          </p>
        </a>
      </div>
    </nav>
  );
}
