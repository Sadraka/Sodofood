import Head from "next/head";
import MenuPage from "../../../components/template/MenuPage";

export default function index({ foods }) {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <MenuPage array={foods} />;
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://api-botofood.vercel.app/data`);
  const data = await res.json();
  return {
    props: {
      foods: data,
    },
    revalidate: 10,
  };
}
