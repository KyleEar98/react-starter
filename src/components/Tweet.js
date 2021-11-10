import React from 'react';

//props lets us access traversy media that we have in app.js
const Tweet = ({name, tweet,tweets,setTweets}) => {
    //to delete the tweet we need to access the state so pass down settweets
    const deleteTweet = () => {
        setTweets(tweets.filter((state) => state.id !== tweet.id))
        //grab all tweets and filter and check 
        //if t does not equal to what we just clicked on 
        //if all the message have 1 they would all get deleted
    }
    return (
        <div className="tweet">
            <h2>{name} </h2>
            <h3>{tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    );
    //if we get error that says jsx element must have one parent put elements in a div 
    //in react we can add another div after this first one
    //we need to make an array to add more elements
};

export default Tweet;