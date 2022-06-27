import { NewsList } from "../components/news/NewsList";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Your most unhappy customers are your greatest source of learning.",
    date_time: new Date().toLocaleDateString("en-US"),
    comments_count: 1,
  },
  {
    id: "2",
    title: "Your most unhappy customers are your greatest source of learning.",
    date_time: new Date().toLocaleDateString("en-US"),
    comments_count: 1,
  },
  {
    id: "3",
    title: "Your most unhappy customers are your greatest source of learning.",
    date_time: new Date().toLocaleDateString("en-US"),
    comments_count: 1,
  },
  {
    id: "4",
    title: "Your most unhappy customers are your greatest source of learning.",
    date_time: new Date().toLocaleDateString("en-US"),
    comments_count: 1,
  },
  {
    id: "5",
    title: "Your most unhappy customers are your greatest source of learning.",
    date_time: new Date().toLocaleDateString("en-US"),
    comments_count: 1,
  },
];

export const NewsPage = (props) => {
  return <NewsList items={DUMMY_DATA} />;
};
