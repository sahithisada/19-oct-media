import logo from './logo.svg';
import './App.css';
import omgdaddy from "./images/omgdaddy.jpg"
import omgdaddyaudio from "./audios/omgdaddysong.mp3"
import video2 from "./videos/video2.mp4"

function App() {
  return (
    <div>
      <h2>ALA VAIKUNTAPURAMLO...</h2>
      <img className="poster" src="https://i.ytimg.com/vi/Mw9QBhc8_KQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhZ0oVgf9vVhKyDwg7OpJr0iWoRQ"></img>
      <img className="poster" src="./images/ramuloposter.jpg"></img>
      <img className="poster" src={omgdaddy}></img>
      <h2>IMAGES</h2>
        <hr></hr>
      <audio src="https://services.brninfotech.com/tws/media2/songs/Ala Vaikuntapuram lo/01 - Samajavaragamana.mp3" controls></audio>
      <audio src="./audios/Ramuloo-Ramulaa(PagalWorld).mp3" controls></audio>
      <audio src={omgdaddyaudio} controls></audio>
      <h2>AUDIOS</h2>
        <hr></hr>
      <video className="poster" src="https://services.brninfotech.com/tws/media2/trailers/AlaVaikuntapuramloo.mp4" controls></video>
      <video className="poster" src="./videos/video1.mp4" controls muted autoplay></video>
      <video className="poster" src={video2} controls></video>
      <h2>VIDEOS</h2>
    </div>
  );
}

export default App;
