import React, { useState } from 'react';
import copy from "copy-to-clipboard"; 
import { useSpeechSynthesis } from "react-speech-kit";
import './App.css'

import { Player } from 'video-react';

import mash from "./mash.mp4";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App(){

  // const [cpy,setcpy] = useState("");
  const { speak } = useSpeechSynthesis();

//   const cpytext = (e) => {
//     setcpy(e.target.value);
//     console.log(cpy);
    
//  } 

const copied=()=>
{
  copy(transcript);
       alert("copied");

  
       
       
       
}

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='con'>
      <p className='p'>Microphone: <span className='of'>{listening ? 'on' : 'off'}</span> </p>
      <div>
      <button className='btn' onClick={SpeechRecognition.startListening}>Start</button>
      <button className='btn' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className='btn' onClick={resetTranscript}>Reset</button>
      </div>
      <div className="t">
      {/* <p className='tt' onChange={cpytext}>{transcript}</p> */}
      {/* <input className='tt' type="text" value={transcript}/> */}
      <textarea name="ta" className='tt' value={transcript} id="" cols="30" rows="5"></textarea>
      </div>
      <div>
      <button className='btn l' onClick={copied}>copy</button>
      <button className='btn l' onClick={() => speak({ text: transcript })} >hear</button>
      </div>
      {/* <video src={mash} autoPlay={true} width="520" height="240" controls/> */}
     
      
    </div>
  );
};
export default App;