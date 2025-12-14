import Link from "next/link";
export default function Button({ children, href, className }) {
  return (
    <Link
      href={href}
      className={`${className} bg-secondary text-[0.8rem] md:text-sm lg:text-xl text-white px-6 py-2 rounded-full hover:bg-secondary transition flex justify-center items-center gap-2`}
    >
      {children}
    </Link>
  );
}
