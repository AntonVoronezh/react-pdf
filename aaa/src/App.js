import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="ui-wrapper">
      <Header />
      <div className="ui-content-wrapper">
        <section className="ui-section">
          <div className="ui-container">
            <h1 className="ui-title-1">Hello world!</h1>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
