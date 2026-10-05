import Header from "./components/Header";
import UserList from "./components/UserList";

export default function App() {
  const users = [
    {
      id: "HlvRHr58C05guOLl64k5",
      image: "https://raw.githubusercontent.com/cederdorff/race/master/images/users/dob.webp",
      mail: "dob@eaaa.dk",
      name: "Dan Okkels Brendstrup",
      title: "Senior Lecturer"
    },
    {
      id: "esCqSNWJAhF7jWnf1xHm",
      image: "https://raw.githubusercontent.com/cederdorff/race/master/images/users/magl.webp",
      mail: "magl@eaaa.dk",
      name: "Magnus Lindholm Nielsen",
      title: "Lecturer"
    },
    {
      id: "fTs84KRoYw5pRZEWCq2Z",
      image: "https://raw.githubusercontent.com/cederdorff/race/master/images/users/race.webp",
      mail: "race@eaaa.dk",
      name: "Rasmus Cederdorff",
      title: "Senior Lecturer"
    },
    {
      id: "fjpRTRTjZHwrq3tTLHri",
      image: "https://raw.githubusercontent.com/cederdorff/race/master/images/users/anki.webp",
      mail: "anki@eaaa.dk",
      name: "Anne Kirketerp",
      title: "Head of Department"
    }
  ];

  return (
    <main className="app">
      <Header />
      <UserList users={users} />
    </main>
  );
}
