import List from "../components/List";

import Link from "next/link";

export default function Products() {
  return (
    <>
      <List />
      <div>
        <Link href="/">Back Home</Link>
      </div>
    </>
  );
}
