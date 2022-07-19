import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="absolute p-[20px] w-full">
      <div className="container flex justify-between items-center">
        <img src={logo} alt="logo" />
        <button className="rounded bg-red-600 p-[5px_20px]">Sign in</button>
      </div>
    </header>
  );
}
