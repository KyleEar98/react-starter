import React,{useState} from "react";//import so we can use react
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
function App() {

  const [name,setName] = useState("dev ed"); //can still pass state via props
  const message = "hello";
  const [textInput,setTextInput] = useState('');//lifted state
  const [tweets,setTweets] = useState([]); //lifted state all tweets 
  return (
    <div className="box"> 
      <CreateTweet 
      textInput={textInput} 
      setTextInput={setTextInput} 
      tweets={tweets} 
      setTweets={setTweets} />

      <TweetList name={name} tweets={tweets} setTweets={setTweets} /> 
      {/* passing down this variable property to tweet.js */}
      {/* <h1>Hello {name}</h1>
      <button onClick={sayHelloHandler}>Click</button> */}
      {/* when adding a parenthesis to a function in the onclick it will invoke right away
      we need to add a callback */}
    </div>
  );
}

export default App;
//we import it in index.js
