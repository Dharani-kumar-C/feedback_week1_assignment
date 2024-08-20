import { FeedbackDisplay, Feedbackform } from "./Feedbackform";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Feedbackform/>} />
          <Route path="/feedback" element={<FeedbackDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}