# 🌟 Opiniometer 
<p align="center">
  <img src="https://i.imgur.com/K4ryW0d.png" >
</p>  

Analyze whether an opinion on specific topic is Positive / Negative / Neutral based on recent tweets! It's possible using Natural Language Processing (NLP) concept called [Sentiment Analysis](https://en.wikipedia.org/wiki/Sentiment_analysis) that can determine if a chunk of text is positive, negative, or neutral based on its polarity.
## Tech Stack
 - React: Used React for the Frontend with a use of React Hooks for state management and lifecycle, React Router that makes it possible to navigate between component and create a Single Web Application.
- Framer Motion : A Motion system library that makes the website smooth and fluid when transitioning between pages.
- Chart.js A data visualization library for displaying the final result.
- Python (Tweepy, TextBlob, Flask) : Utilize Python for the Backend, that use Tweepy to interact with the Twitter API, TextBlob that calculate a polarity of each text, and Flask as a RESTful API that serve all the result in a JSON to communicate in a Frontend.
