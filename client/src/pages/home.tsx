import React from "react";
import { Catalog } from "../components/catalog";
import { MyProducts } from "../components/my-products";

export const Home = () => {
    const [selectedTab, setSelectedTab] = React.useState<string>("catalog");

    return (
        <div className="home container">
            <h1 className="title mt-4">Streaem demo</h1>
            <div className="tabs is-centered mt-4">
                <ul>
                    <li className={selectedTab === "catalog" ? "is-active" : undefined}>
                        <a onClick={() => setSelectedTab("catalog")}>Catalog</a>
                    </li>
                    <li className={selectedTab === "myproducts" ? "is-active" : undefined}>
                        <a onClick={() => setSelectedTab("myproducts")}>My products</a>
                    </li>
                </ul>
            </div>

            <div className="container mt-4">
                <div className="columns">
                    <div className="column is-12">
                        {selectedTab === "catalog" && <Catalog />}
                        {selectedTab === "myproducts" && <MyProducts />}
                    </div>
                </div>
            </div>
        </div>
    );
};
