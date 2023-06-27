const synthesizeSpeech = (text) => {

    "use strict";
    
    var sdk = require("microsoft-cognitiveservices-speech-sdk");
    var _readline = require("readline");
    require("dotenv").config()
    const { SPEECH_KEY, SPEECH_REGION } = process.env

    return new Promise((resolve, _reject) => { 
      var audioFile = `${Date.now()}.wav`;
      const audioFileToCreate = `./audio/${audioFile}`
      
      const speechConfig = sdk.SpeechConfig.fromSubscription(SPEECH_KEY, SPEECH_REGION);
      const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFileToCreate);
  
      // The language of the voice that speaks.
      speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural"; 
  
      // Create the speech synthesizer.
      var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
  
      synthesizer.speakTextAsync(text,
        function (result) {
      if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        console.log("synthesis finished.");
        resolve(audioFile)
      } else {
        console.error("Speech synthesis canceled, " + result.errorDetails +
            "\nDid you set the speech resource key and region values?");
      }
    
      synthesizer.close();
      synthesizer = null;
    },
        function (err) {
      console.trace("err - " + err);
      synthesizer.close();
      synthesizer = null;
    });
    console.log("Now synthesizing to: " + audioFile);
    })

};

module.exports = {
  synthesizeSpeech
}