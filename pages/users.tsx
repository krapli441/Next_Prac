import fetch from "isomorphic-unfetch";

interface User {
  name: string; // 예상되는 타입에 맞게 수정
  // 다른 속성들도 필요한 경우 여기에 추가
}

const index = ({ user }: { user: User }) => {
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
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
