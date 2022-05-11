import * as React from "react";
import { Footer,Header } from ".";

export default ({ children,props }) => {
    return( <main className="wrapper">
    <Header />
    <main className={"main"}>
      <div className={"layout--main"}>{children}</div>
    </main>
    <Footer />
  </main>
);
}