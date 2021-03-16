import { useLocation } from "react-router-dom";
import "./styles/App.css";

const Tweet = ({ text, polarity }) => {
  return (
    <div class="tweetbox">
      <div class="tweetpic">
        <img src="https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg" />
      </div>
      <div class="tweetcontent">
        <div class="tweethead">
          <p class="tweetname">Anonymous Tweet</p>
          <p class="tweetid">@AnonUser</p>
        </div>
        <div class="tweetText">{text}</div>
        <div class="tweetScore">
          <p>{polarity}</p>
        </div>
      </div>
    </div>
  );
};

export default function Tweets() {
  const { state } = useLocation();
  return (
    <>
      <h1>Tweets</h1>
      <div class="scrollable">
        {state.result["tweets"].map((tweet) => (
          <Tweet text={tweet[0]} polarity={tweet[1]} />
        ))}
      </div>
    </>
  );
}
