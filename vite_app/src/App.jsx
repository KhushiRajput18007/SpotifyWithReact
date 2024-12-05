
import logo1 from './assests/Spotifylogo.png'
import library from './assests/Yourlibrary.png'
import create from './assests/Create.png'
import episode from './assests/your episodes.png'
import like from './assests/Liked.png'
import './style.css'
import home from './assests/Home.png'
import search from './assests/Search.png'
import option from './assests/opt.png'
import toparrow from './assests/top arrow navigation.png'
import user from './assests/User.png'
import img4 from './assests/image4.png'
import img3 from './assests/image3.png'
import img2 from './assests/image2.png'
import img1 from './assests/image1.png'
import img5 from './assests/image5.png'
import img6 from './assests/image6.png'
import img7 from './assests/image7.png'
import img8 from './assests/image8.png'
import img9 from './assests/image9.png'
import img10 from './assests/image10.png'
import img11 from './assests/image11.png'
import heart from './assests/bx_bxs-heart.png'
import music from './assests/Music Player Options.png'
import rightoption from './assests/Right options.png'

const App = () => {

  return (
    <>
 
      <div className="main">
        <div className="sidebar">
          <div className="first">
            <div className="logo">
              <img src={logo1} alt="" />
            </div>
            <div><img src={home} alt="" />Home</div>
            <div><img src={search} alt="" />Search</div>
            <div><img src={library} alt="" />Your Library</div>
          </div>
          <div className="sec">
            <div><img src={create} alt="" />Create Playlist</div>
            <div><img src={like} alt="" />Liked Songs</div>
            <div><img src={episode} alt="" />Your Episodes</div>
          </div>

          <div className="third">
            <div>FAV</div>
            <div>Daily Mix 1</div>
            <div>Discover Weekly</div>
            <div>Malayalam</div>
            <div>Dance/Electronix Mix</div>
            <div>EDM/Popular</div>
          </div>

          <div className="fourth"><img src={option} alt="" />Install App</div>
        </div>
        <div className="cont">
          <div className="top">
            <div className="arrows"><img src={toparrow} alt="" /></div>
            <div className="profile">
              <img src={user} alt="" />
            </div>
          </div>
          <p className="text">Good morning</p>
          <div className="display">
            <div className="music"><img src={like} alt="" />Liked Songs</div>
            <div className="music"><img src={img4} alt="" />Netflex Playlist</div>
            <div className="music"><img src={img3} alt="" />K/ DA</div>
            <div className="music"><img src={img1} alt="" />Liked Songs</div>
            <div className="music"><img src={img2} alt="" />Dance/Electronic Mix</div>
          </div>


          <p className="text">Shows you might like</p>
          <div className="shows">
            <div><img src={img9} alt="" />
              Weekly Motivation</div>
            <div><img src={img8} alt="" />MEDITATION SELF</div>
            <div><img src={img7} alt="" />Words beyond act</div>
            <div><img src={img6} alt="" />The Alexa Show</div>
            <div><img src={img5} alt="" />The Stories of Ma</div>
            <div><img src={img10} alt="" />Motivational Daily b</div>
          </div>


        </div>
      </div>
      <div className="end">
        <div>
          <img src={img11} alt="" className="music" id="last" />
          <p>Dreaming On </p>
          <img src={heart} alt="" />
        </div>
        <img src={music} alt="" />
        <img src={rightoption} alt=""/>
          <div className="green">

          </div>
          </div>




        </>
        )
}

        export default App