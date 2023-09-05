import fetch from "isomorphic-unfetch";

interface User {
  name: string;
}

const Users = ({ user }: { user: User }) => {
  const username = user && user.name;
  return <div>{username}</div>;
};

export const getServerSideProps = async ({
  query,
}: {
  query: { name: string };
}) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};

export default Users;
