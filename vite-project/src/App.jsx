import Card from './component/card.jsx'
import Nav from './component/nav.jsx'

const App = () => {
  return (
    <div>
      <Nav  />
      <div className="main">
        <Card user="Dipak Yadav" age="19"/>
        <Card user="Dipesh Yadav" age="22"/>
        <Card user="Ranjit Yadav" age="26"/> 
        <Card user="Ranjit Yadav" age="26"/> 
      </div>
     
    </div>
  )
}

export default App
