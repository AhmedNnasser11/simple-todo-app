/** @format */

import { useState } from "react";
import Filter from "./todo/filter";
import Layout from "./components/layout";
import List from "./todo/list";

function App() {
  const [status, setStatus] = useState("All");

  return (
    <Layout>
      <Filter setStatus={setStatus} status={status} />
      <div className=" mt-5">
        <List status={status} />
      </div>
    </Layout>
  );
}

export default App;
