import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }) => {
  return (
    <Link href={"/"} className={`flex items-center  text-white ${className}`}>
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <span className="text-2xl ml-3">Programming</span>
    </Link>
  );
};
export default Logo;
