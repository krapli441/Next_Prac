import fetch from "isomorphic-unfetch";

interface User {
  name: string;
  user: string;
}

const Index = ({ user }: { user: User }) => {
  const username = user && user.name;
  return <div>{username}</div>;
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://api.github.com/users/krapli441");
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: { user: null } };
  } catch (error) {
    console.log(error);
    return { props: { user: null } };
  }
};

export default Index;
