import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "src/components/layout/Layout";
import "./Explore.scss";

export default function Explore() {
  return (
    <Layout header>
      <div className="main-explore">
        <div className="cell cell-1"></div>
        <div className="cell cell-2"></div>
        <div className="cell cell-3"></div>
        <div className="cell cell-4"></div>
        <div className="cell cell-5"></div>
        <div className="cell cell-6"></div>
        <div className="cell cell-7"></div>
        <div className="cell cell-8"></div>
      </div>
    </Layout>
  );
}
