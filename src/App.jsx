import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card";
import data from "./data.js";
import Header from "./components/Header";

function App() {
    const dataForCard = data.map(function (item) {
        return <Card
            key={item.id}
            item={item}
        />
    })
    console.log(dataForCard)
    return (
        <div className="App">
            <Navbar/>
            <Header />
            <div className="cards">
                <section className="cards-list">
                    {dataForCard}
                </section>
            </div>
        </div>
    )
}

export default App
