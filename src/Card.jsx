import { useState } from "react"
import { data } from './data'

function Card(){
    const[index,setIndex] = useState(0)
    const[ques,setQuestion] = useState(data[index].question)
    const[inputValue,setInputValue] = useState('')
    const [isAnswerCorrect, setIsAnswerCorrect] = useState('black');

    function handleOnclick(){
        if (ques === data[index].question){
            setQuestion(data[index].answer)
        }
        else{
            setQuestion(data[index].question)
        }
        
    }
    function handleNextClick(){
        if (index + 1 < data.length) {
            setIndex(index+1)
            setQuestion(data[index + 1].question)
            setInputValue('')
            setIsAnswerCorrect("black");
          } else {
            // Handle the case when there are no more questions
            // You can reset the index or show a message
            setQuestion("No more questions");
          }
    }

    function handleshuffle(){
        let max = data.length - 1 ;
        let min = 0
        console.log(max)
        let random_index = Math.random() *(max - min + 1) + min;
        random_index = Math.floor(random_index)
        setIndex(random_index)
        setQuestion(data[random_index].question) ; 
        setInputValue('')
        setIsAnswerCorrect("black");
        
    }

    function handleInput(){
        if (inputValue.toLowerCase() === data[index].answer.toLowerCase()){
            setIsAnswerCorrect('green')
        }
        else if(inputValue.toLowerCase() !== data[index].answer.toLowerCase() && inputValue.toLowerCase() !== ""){
            setIsAnswerCorrect('red')
        }
    }

    function handlePreviousClick(){
        if (index - 1 > -1) {
            setIndex(index-1)
            setQuestion(data[index - 1].question);
            setInputValue('')
            setIsAnswerCorrect("black")
          } else {
            // Handle the case when there are no more questions
            // You can reset the index or show a message
            setQuestion("No previous questions");
          }
    }

    function checkColor(ques){
        if (ques === data[index].question){
            return "black"
        }
        else{
            return "green"
        }
    }

    // const[ques,setQuestion] = useState(curr_arr.question)
    return(
        <div>
            <div className="main_content" onClick={handleOnclick}>
                <h4>Showing {index + 1} of {data.length}</h4>
                <h3 style={{ color: `${checkColor(ques)}` }}>{ques}</h3>
            </div>

            <div>
                <h3>Solution checker</h3>
                <input
                type="text"
                value= {inputValue}
                placeholder="Enter solution here"
                onChange= {(e)=> setInputValue(e.target.value)}
                style={{ borderColor: isAnswerCorrect ,
                borderWidth: isAnswerCorrect ? "5px" : "5px"}}
                />

                <button onClick={handleInput}>Submit</button>
            </div>
            <button className = "previous_button" onClick = {handlePreviousClick}>
                ←
            </button>

            <button className = "next_button" onClick = {handleNextClick}>
                →
            </button>

            <div>
                <button onClick={handleshuffle}>Shuffle</button>
            </div>
        </div>
    )
    
}

export default Card ; 