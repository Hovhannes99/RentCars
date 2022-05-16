import * as React from "react";
import { Footer,Header } from ".";
import DataProvider from "../context/dataContext";
import { Helmet } from "react-helmet"


export default ({ children,props }) => {
    return(
        <DataProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Luxury Car Rental Miami - Prestigious, Fast, &amp; Exotic.</title>
                <link rel="canonical" href="https://rentcarsmaster.gatsbyjs.io/" />
            </Helmet>
            <main className="wrapper">
                <Header />
                <main className={"main"}>
                    <div className={"layout--main"}>{children}</div>
                </main>
                <Footer />
            </main>
        </DataProvider>

);
}