import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";

const CreateTweet = ({tweets,setTweets,textInput,setTextInput}) => {
    //functions
    const userInputHandler = (e) => { //e is details on what just happened
        setTextInput(e.target.value);
    };//e.target.value returns what we type

    const submitTweetHandle = (e) =>  {
        //stops default behavior of form refreshing and not giving us our consolelog
        e.preventDefault();
        setTweets([...tweets,{message:textInput, id: uuidv4()}]);//gives random generated id
        //...spread operator says if there was any previous info in the tweets states
        //add it and add whatever is new to it (textInput)
        setTextInput(""); //clear after submit
    }

    return (
        //this form updates the state but it is not connected
        //ex if we cleared textinput the textarea will still have previous text
        //we need to change textarea value to textInput to connect the state
        <form onSubmit={submitTweetHandle}>
            <textarea value={textInput} 
            onChange={userInputHandler} 
            cols="30" rows="5"></textarea>

            <button>Submit</button>
            {/* <h1 onClick={() => setTextInput("")}>{textInput}</h1> */}
        </form>
    );
};

export default CreateTweet;

//state lifting takes a state and moves it up so you can send it everywhere