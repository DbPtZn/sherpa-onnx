const addon = require('./addon.js')
const streaming_asr = require('./streaming-asr.js');
const non_streaming_asr = require('./non-streaming-asr.js');
const non_streaming_tts = require('./non-streaming-tts.js');
const vad = require('./vad.js');

module.exports = {
  OnlineRecognizer: streaming_asr.OnlineRecognizer,
  OfflineRecognizer: non_streaming_asr.OfflineRecognizer,
  OfflineTts: non_streaming_tts.OfflineTts,
  readWave: addon.readWave,
  writeWave: addon.writeWave,
  Display: streaming_asr.Display,
  Vad: vad.Vad,
  CircularBuffer: vad.CircularBuffer,
}
