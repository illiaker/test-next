import { GetServerSideProps, NextPageContext } from "next";
import { User, getUser } from "../../api/users";
import NavBarContainer from "@/components/NavBar";

export default function Nft({ user }: { user: User }) {
  return (
    <NavBarContainer>
      <div>
        {user.id}: {user.name}, {user.username}
      </div>
    </NavBarContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let user = {} as User;
  if (params && params.id) user = await getUser(`${params.id}`);
  return {
    props: { user },
  };
};
