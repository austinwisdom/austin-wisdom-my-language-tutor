const express = require("express");
const router = express.Router();
const cors = require('cors');
const  multer  =  require('multer')
const  FormData  =  require('form-data');
const { Readable } =  require('stream');
const  axios  =  require('axios');
const  upload  =  multer();

router.use(cors())

const myTutorController = require("../controllers/myTutor-controller")
const speechRecognitionController = require("../speechRecognition-controller")

const  bufferToStream  = (buffer) => {
    return  Readable.from(buffer);
  }

  router.post('/api/transcribe', upload.single('audio'), async (req, res) => {
    try {
      console.log(req.data)
      console.log(req.body)
      const  audioFile  = req.audio;
      if (!audioFile) {
        return res.status(400).json({ error: 'No audio file provided' });
      }
      console.log("this is a test")
      const  formData  =  new  FormData();
      const  audioStream  =  bufferToStream(audioFile.buffer);
      formData.append('file', audioStream, { filename: 'audio.mp3', contentType: audioFile.mimetype });
      formData.append('model', 'whisper-1');
      formData.append('response_format', 'json');
      const  config  = {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      };
      // Call the OpenAI Whisper API to transcribe the audio
      const  response  =  await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, config);
      const  transcription  = response.data.text;
      res.json({ transcription });
    } catch (error) {
      res.status(500).json({ error: 'Error transcribing audio' });
    }
  });

router.route("/").get(myTutorController.myTutor)
router.route("/speech-to-text").post(speechRecognitionController.getSpeechToText)
router.route("/:language/:topic").post(myTutorController.getOpenAIResponse)
router.route("/:language").get(myTutorController.getTopics)


module.exports = router