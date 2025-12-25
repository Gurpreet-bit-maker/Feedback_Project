// import Button from "@mui/material/Button";
import Button from "@mui/material/Button";

import axios from "axios";

export default function Buttons({ feedbacks, index, Ratings, setRating }) {

  
  let click = async (index) => {
    try {
      let deleted = feedbacks.find((_, id) => id == index);
      let id = deleted._id;

      let deletedFeedback = await axios.delete(
        `http://localhost:5000/users/${id}`
      );

      console.log(deletedFeedback.data);
      setRating(deletedFeedback.data);
      console.log(Ratings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between text-white mt-5 text-[12px]">
      <Button
        sx={{ width: {xs:2, sm: 8, md: 150 }, fontSize: {xs: 10, sm: 12, md: 20 } }}
        onClick={() => click(index)}
        variant="outlined"
      >
        Delete
      </Button>
    </div>
  );
}
