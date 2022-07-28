import { uiActions } from "./ui-slice";
import { newsActions } from "./news-slice";

const fetchData = async (link) => {
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Could not fetch cart data.");
  }

  return await response.json();
};

export const fetchNewsData = () => {
  return async (dispatch) => {
    const link =
      "https://react-hacker-news-3e5a6-default-rtdb.firebaseio.com/news.json";
    const data = await fetchData(link);
    try {
      dispatch(newsActions.getAll({ items: data || [] }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendNewsData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending news data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-hacker-news-3e5a6-default-rtdb.firebaseio.com/news.json",
        {
          method: "POST",
          body: JSON.stringify({
            title:
              "Your most unhappy customers are your greatest source of learning.",
            link:
              "https://stackoverflow.com/questions/40911194/how-do-i-add-an-element-to-array-in-reducer-of-react-native-redux",
            description:
              "Your most unhappy customers are your greatest source of learning.",
            modified_date: new Date().toLocaleDateString("en-US"),
            modified_by: "DuyNVA",
          }),
        }
      );

      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending news data failed!",
          })
        );
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending news data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending news data failed!",
        })
      );
    }
  };
};

export const fetchCommentsData = () => {};

export const sendCommentsData = () => {};
