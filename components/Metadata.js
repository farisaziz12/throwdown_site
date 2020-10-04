import React from "react";
import Head from "next/head";

export default function Metadata(props) {
  const { title } = props;
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#34ac54 " />
        <meta name="description" content="Christmas Throwdown Website" />
        <meta name="author" content="Faris Aziz"></meta>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
      </Head>
    </div>
  );
}
