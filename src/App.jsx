import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './data.js';

function App() {
  const cardElements = cardData.map(item =>{
    return ( 
      <Card
        key={item.id}
        item={item}
        //Można zrobić {...item}, ale trzeba usunąć w komponencie item przy props
      />
  )})
  return (
    <div id="root">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  )
};

export default App;
