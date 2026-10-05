import Header from "./components/Header";
import User from "./components/User";

export default function App() {
  return (
    <main className="app">
      <Header />
      <section className="grid">
        <User
          name="Dan Okkels Brendstrup"
          title="Senior Lecturer"
          mail="dob@eaaa.dk"
          image="https://raw.githubusercontent.com/cederdorff/race/master/images/users/dob.webp"
        />
        <User
          name="Magnus Lindholm Nielsen"
          title="Lecturer"
          mail="magl@eaaa.dk"
          image="https://raw.githubusercontent.com/cederdorff/race/master/images/users/magl.webp"
        />
        <User
          name="Rasmus Cederdorff"
          title="Senior Lecturer"
          mail="race@eaaa.dk"
          image="https://raw.githubusercontent.com/cederdorff/race/master/images/users/race.webp"
        />
      </section>
    </main>
  );
}
