import Link from "next/link";
import { User, getUsers } from "../api/users";
import NavBarContainer from "@/components/NavBar";

export async function getStaticProps() {
  const users = await getUsers();
  return {
    props: { users },
  };
}

export default function Nfts({ users }: { users: User[] }) {
  return (
    <NavBarContainer>
      <ul>
        {users.map((usr) => (
          <li key={usr.id}>
            <Link href={`nfts/${usr.id}`}>{usr.name}</Link>
          </li>
        ))}
      </ul>
    </NavBarContainer>
  );
}
