import { AddComment } from "../components/comment/AddComment";
import { Comment } from "../components/comment/Comment";
import { Card } from "../components/ui/UI";

const DUMMY_DATA = {
  id: "5",
  title: "Your most unhappy customers are your greatest source of learning.",
  date_time: new Date().toLocaleDateString("en-US"),
  comments_count: 1,
};

export const AskPager = (props) => {
  return (
    <Card>
      <AddComment item={DUMMY_DATA} />
      <Comment />
    </Card>
  );
};
