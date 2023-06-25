import { useState, useRef } from "react";
import { endPoint} from "../../utilities/endpoints"
import FormData from "form-data"

import "./AudioRecorder.scss";
import axios from "axios";

const mimeType = "audio/webm";

const AudioRecorder = () => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);

  useState(() => {
    console.log(audio)
  }, [audio])

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setRecordingStatus("recording");
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
      console.log(`This is event data: ${event.data}`)
    };
    console.log("this is start recording")
    setAudioChunks(localAudioChunks);
    console.log(`this is localaudiochunnks: ${localAudioChunks}`)
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      console.log(`This is the blob: ${audioBlob}`)

      function blobToFile(theBlob, fileName) {
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
      }

      const audioFile = blobToFile(audioBlob, `test-${Date.now()}.wav`)
      console.log(`This is chunks: ${audioChunks}`)
    //   let base64String;

    //   let reader = new FileReader();
    //     reader.readAsDataURL(audioBlob);
    //     reader.onloadend = function () {
    //         base64String = reader.result; 
    //     }

      const formdata = new FormData()
      console.log(`this is audiofile: ${audioFile}`)
      formdata.append("audio", audioFile)
      console.log(`this is formdata: ${formdata}`)
      setAudio(audioBlob);

      const getTranscript = async () => {
        console.log(`${endPoint}/my-tutor/api/transcribe`)
        await axios
            .post(`${endPoint}/my-tutor/api/transcribe`, formdata, {
                headers: {
                    "Content-Type": `application/octet-stream`
                }
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(`${err}: Unable to reach stt node endpoint`)
            })
      }
      getTranscript()
      setAudio(audioBlob);
      setAudioChunks([]);
    };
  };

  return (
    <div>
      <main>
        <div className="audio-controls">
          {!permission ? (
            <button
              className="recorder__button"
              onClick={getMicrophonePermission}
              type="button"
            >
              Record
            </button>
          ) : null}
          {permission && recordingStatus === "inactive" ? (
            <button
              className="recorder__button"
              onClick={startRecording}
              type="button"
            >
              Record
            </button>
          ) : null}
          {recordingStatus === "recording" ? (
            <button
              className="recorder__button"
              onClick={stopRecording}
              type="button"
            >
              Stop Recording
            </button>
          ) : null}
        </div>
        {audio && (
          <div className="audio-container">
            <audio src={audio} controls></audio>
            <a download href={audio}>
              Download Recording
            </a>
          </div>
        )}
      </main>
    </div>
  );
};
export default AudioRecorder;
