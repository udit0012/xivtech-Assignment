import './App.css';
import Card from './components/Card';

function App() {
  const array = [
    {
      title: "AI + RPA is what we do",
      description: "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
      btnText: "AI + RPA Automation",
      image: "https://www.xivtech.io./rp2.jpg"
    },
    {
      title: "Make Bolder Choices",
      description: "Digital focused strategies to realize market-changing ideas",
      btnText: "Build Better Apps",
      image: "https://www.xivtech.io./p1.png"
    },
    {
      title: "Innovate with Speed",
      description: "Create higher quality software, deliver on customer expectations and business goals",
      btnText: "DevOps",
      image: "https://www.xivtech.io./p2.jpg"
    },
    {
      title: "Embrace Cloud",
      description: "With Cloud-First accelerate innovation and optimize performance",
      btnText: "Cloud Services",
      image: "https://www.xivtech.io./p3.jpg"
    }
  ]
  return (
    <div className="App">
      <div className='container'>
        <div className='maintitle'>Let's Collaborate</div>
        <div>
          {array.map((card) => {
            return <Card card={card} />
          })}
        </div>
        <button className='darkbtn'>Get in touch</button>
      </div>
    </div>
  );
}

export default App;
