import Head from "next/head";
import Link from "next/link";
import UserList from "../components/user/userlist";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserList />
    </div>
  );
}
