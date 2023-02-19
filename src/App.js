import './App.css';
import Navbar from './sections/Navbar/Navbar';
import FireTracker from './sections/FireTracker/FireTracker';
import FireProtocols from './sections/FireProtocols/FireProtocols';
import FireFacts from './sections/FireFacts/FireFacts';
import Resources from './sections/Resources/Resources';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
import FireCard from './components/FireCard/FireCard';


function App() {
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
  return (
    <BrowserRouter>
      <Navbar />
      <FireTracker />
      {/* <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        } */}
        <FireCard title="fire breaks out in ontario!" date="2023-2-21" time="10:00AM" location ="Toronto,Ontario" description='oh my gosh so a fire breaks out!!'></FireCard>
        <FireProtocols />
        <FireFacts />
        <Resources />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
