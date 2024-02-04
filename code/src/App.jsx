import './App.css';

function App() {
  return (
    <div className="container grid grid-cols-2 grid-gap">

      <div className="">
        <div className="icon"></div>
        <div className="lg-hero-text">
          <p>THE eWatch with the newest microchip technology</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
        </div>
        <div className="btns">
          <a href="">Order now</a>
          <a href="">Explore more</a>
        </div>
        <div className="more">
          <div className="open-time">

          </div>
          <div className="stars">

          </div>
          <div className="views">

          </div>
          <div className="webs">
            
          </div>
        </div>
      </div>
      
      {/* */}

      <div className="hero-img">
        <img className='main-img' src="../src/assets/unsplash_QRWAdBCqysc.png" alt="" />
        <img className='stroke' src="../src/assets/Stroke.png" alt="" />
        <img src="../src/assets/Stroke-1.png" alt="" className="stroke-1" />
        <img src="../src/assets/Star.png" alt="" />
        <img src="../src/assets/Star-1.png" alt="" />
      </div>
    </div>
  )
}

export default App
