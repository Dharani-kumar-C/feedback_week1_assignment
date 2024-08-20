import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Feedbackform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = { name, email, rating, comment };

    const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];

    const updatedFeedbackData = [...feedbackData, newFeedback];

    localStorage.setItem("feedbackData", JSON.stringify(updatedFeedbackData));

    setName("");
    setEmail("");
    setRating(0);
    setComment("");
    window.alert('Feedback Submitted Successfully. Click on View Feedback')
  };

  return (
    <div className="container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="feed-name">
          <p>Name </p>
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="feed-mail">
          <p>Email </p>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="feed-rating">
          <p>Rating </p>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
            key={num}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              color: num <= rating ? "gold" : "gray",
            }}
            onClick={() => setRating(num)}
          >
            ★
          </span>
          ))}
        </div>
        <div className="feed-comment">
          <p>Comment </p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate("/feedback")}>View Feedback</button>
      {/* <FeedbackDisplay feedbackData={feedbackData} /> */}
    </div>
  );
};

export const FeedbackDisplay = () => {
  const [newfeedbackData, setnewFeedbackData] = useState([]);

  useEffect(() => {
    // Retrieve feedback data from localStorage
    const storedFeedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
    setnewFeedbackData(storedFeedbackData);
  }, []);

  return (
    <div className="feed-page">
      <h2>Feedback</h2>
      <ul>
        {newfeedbackData.map((data, index) => (
          <li key={index}>
            <p>Name : {data.name}</p>
            <p>Email : {data.email}</p>
            <p>Rating : {data.rating}</p>
            <p>Comment : {data.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDisplay;