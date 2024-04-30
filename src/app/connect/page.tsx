// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/users", { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error("유저정보를 가지고 오지 못함");
  }
  return res.json();
};

const connect = async () => {
  const users = await getData();
  console.log(users);
  return <div>connect</div>;
};

export default connect;
