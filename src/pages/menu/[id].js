import { useRouter } from "next/router";
import React from "react";
import Detailpage from "../../../components/template/Detailpage";
import Loadingpage from "../../../components/template/Loadingpage";
import Head from "next/head";

export default function Id({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loadingpage />;
  }
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <Detailpage data={data} />;
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://api-botofood.vercel.app/data`);
  const data = await res.json();
  const foodData = data.slice(0, 4);
  const paths = foodData.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));
  //   console.log(paths);

  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const res = await fetch(`${process.env.BASE_URL}/data/${context.params.id}`);
  const data = await res.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data,
    },
    revalidate: 10,
  };
}
