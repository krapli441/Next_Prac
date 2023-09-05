import fetch from "isomorphic-unfetch";

interface User {
  name: string; // 예상되는 타입에 맞게 수정
  // 다른 속성들도 필요한 경우 여기에 추가
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
