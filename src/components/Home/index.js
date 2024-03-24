// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="homeBg">
    <Header />
    <div className="productCont">
      <div className="content">
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air jfh sajff sndflf ksnlsdjf sdnfljdf
          snnflds sadfnjds sdnf dnfjdfds snksjfpids fjiprfnf flv nfijfijr
          smfljfid fjpifpf sffid
        </p>
        <button type="button">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="productImg"
      />
    </div>
  </div>
)

export default Home
