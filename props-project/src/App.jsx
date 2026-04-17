import Card from "./component/card"


const App = () => {

  const jobs = [
  {
    brandLogo: "https://t3.ftcdn.net/jpg/03/88/07/84/360_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$25/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$35/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$20/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$30/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGtN85PJ-mHVr-C04pXsBkeeTvq4sG0DIeQ&s",
    companyName: "Tesla",
    datePosted: "4 weeks ago",
    post: "Mechanical Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_1280.jpg",
    companyName: "Spotify",
    datePosted: "2 days ago",
    post: "Product Manager",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$28/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JPvedCBmNG39bU4Zvq1PJTRRl6Nc8OOimA&s",
    companyName: "Uber",
    datePosted: "3 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "Graphic Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$18/hr",
    location: "Noida, India"
  }
];

  return (
   <div className="parent">

    {jobs.map(function(job,idx){
      return <div key={idx}>
        <Card companyName={job.companyName} brandLogo={job.brandLogo} datePosted={job.datePosted} post={job.post} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location} />;
        </div>
    })}
     
     
   </div>
  )
}

export default App
