import Head from "next/head";
import Categourypage from "../../../components/template/Categourypage";

export default function index({ query, data }) {
  return (
    <>
      <Head>
        <title>Categoury</title>
      </Head>
      <Categourypage query={query} data={data} />;
    </>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://api-botofood.vercel.app/data`);
  const data = await res.json();

  ///////
  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter((detail) => {
      if (detail.Difficulty && detail.Difficulty === query.difficulty) {
        // console.log(detail);
        return detail;
      }
    });
    // console.log(difficultyResult.length);
    const timeResult = item.details.filter((detail) => {
      const cockingTime = detail["Cooking Time"] || "";
      const [timeData] = cockingTime.split(" ");
      if (query.time === "less" && timeData && +timeData <= 30) {
        // اگر تایم در کوئری برابر "کمتر" بود این کار را انجام میدهد
        return detail;
      } else if (query.time === "more" && +timeData >= 30) {
        // اگر تایم در کوئری برابر "بیشتر"  بود این کار را انجام میدهد
        return detail;
      }
    });
    // چون توابع بالایی هر بار ری رندر میشود برای همین هر سری یک عبارت جدید را بر میگردانند ولی چون فیلتر دیتا یکبار اجرا و فیلتر میشود دستورات پایین در هر نوبت فیلتر کردن عبارت هارا داخل فیتر دیتا برمیگردانند پس ما بیش از یک دیتا میتوانیم داشته باشیم!
    if (
      query.difficulty &&
      query.time &&
      timeResult.length &&
      difficultyResult.length
    ) {
      return item;
    } else if (query.difficulty && !query.time && difficultyResult.length) {
      return item;
    } else if (!query.difficulty && query.time && timeResult.length) {
      return item;
    }
  });

  return {
    props: {
      query,
      data: filteredData,
    },
  };
}
