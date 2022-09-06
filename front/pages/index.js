import Head from "next/head";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      {/* SEO here */}
      <Head>
        <title>Énirányítok</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </div>
  );
}
