import 'remixicon/fonts/remixicon.css'


const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">

        <div className="top">
          <div><img src={props.brandLogo} alt="Logo" /></div>
          <div className="btn">Save <i class="ri-bookmark-line"></i></div>
          
        </div>

        <div className="mid">
          <div className="mid-companyname">
          <h2>{props.companyName}</h2>
          <span>{props.datePosted}</span>
          </div>
          <h2>{props.post}</h2>
          <div className="midbtn">
            <button>{props.tag1}</button>
            <button>{props.tag2}</button>
          </div>
        </div>

        <div className="buttom">
          <div>
            <h3>{props.pay}</h3>
            <span>{props.location}</span>
          </div>
          <button>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
