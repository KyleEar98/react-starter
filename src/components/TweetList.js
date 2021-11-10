import React from 'react';
import Tweet from './Tweet';
//props lets us access traversy media that we have in app.js
const TweetList = ({name, tweets,setTweets}) => {
    return (
        <div className="tweet-list">
            {tweets.map(tweet =>( 
            <Tweet 
            setTweets={setTweets} 
            name={name} 
            tweet={tweet} 
            tweets={tweets} key={tweet.id} />
            // passing all these down to tweets
            ))}

        </div>
    );
};

export default TweetList;
{/* whenever we write a tweet and submit we will create a new tweet component */}
{/* can keep passing down name and message from app.js to tweetlist to tweet */}
{/* <button onClick={ () => setName("john")}>Click</button> */}
{/* if we didnt add the function arrow the setName function would invoke right away */}