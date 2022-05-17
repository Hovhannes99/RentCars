import * as React from "react";
import { Footer, Header } from ".";
import DataProvider from "../context/dataContext";

export default ({ children, props }) => {
  return (
    <DataProvider>
      <main className="wrapper">
        <Header />
        <main className={"main"}>
          <div className={"layout--main"}>{children}</div>
        </main>
        <Footer />
      </main>
    </DataProvider>
  );
};
