import { Card, Span } from "../UI/UI";

export const NoImages = (props) => {
  return (
    <Card className={props.className}>
      <Span>No images</Span>
    </Card>
  );
};
