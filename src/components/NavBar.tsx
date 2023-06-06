import Link from "next/link";

export default function NavBarContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <nav className={"navbar"}>
          <Link href={"/"}>Main Page</Link>
          <Link href={"/nfts"}>Nfts</Link>
        </nav>
        {children}
      </div>
      <style jsx>{`
        .navbar {
          display: flex;
          gap: 20px;
          color: white;
          background-color: black;
        }
      `}</style>
    </>
  );
}
