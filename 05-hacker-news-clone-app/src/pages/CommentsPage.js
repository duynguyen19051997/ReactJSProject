import { AddComment } from "../components/comment/AddComment";

const DUMMY_DATA = {
  id: "5",
  title: "Your most unhappy customers are your greatest source of learning.",
  date_time: new Date().toLocaleDateString("en-US"),
  comments_count: 1,
};

export const CommentsPage = (props) => {
  return <AddComment item={DUMMY_DATA} />;
};
