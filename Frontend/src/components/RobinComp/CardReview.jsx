import { useState } from "react";

export default CardReview = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating) {
      alert("Please select a rating");
      return;
    }

    if (!review.trim()) {
      alert("Please write a review");
      return;
    }
    const newReview = {
      name: name || "Anonymous",
      rating,
      review,
      image: image || "",
      date: new Date().toLocaleDateString("en-GB"),
    };

    console.log({
      rating,
      review,
    });
    if (onAddReview) {
      onAddReview(newReview);
    }             

    alert("Review submitted successfully!");

    setRating(0);
    setReview("");
    setName("");
    setImage("");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Write a Review</h1>

          <p className="text-slate-500 mt-2">Share your experience with us</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Rating */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-slate-800 mb-3">
              Your Rating
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-4xl transition-transform hover:scale-110 ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            {rating > 0 && (
              <p className="text-sm text-slate-500 mt-2">
                You selected {rating} out of 5
              </p>
            )}
          </div>

          {/* Review */}
          <div className="mb-6">
            <label
              htmlFor="review"
              className="block text-lg font-semibold text-slate-800 mb-3"
            >
              Your Review
            </label>

            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your experience here..."
              rows="6"
              className="w-full border border-slate-300 rounded-xl p-4 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};
