import "./App.css";
import Girl1 from "../src/assets/girl.png";
import Logo from "../src/assets/logo.png";
import Group from "../src/assets/Group 2.png";
import { BookCategories } from "./Datas/Bookcategories";
import Card from "./components/card/Card";
import Book1 from "./assets/book1.png";
import Book2 from "./assets/Book2.png";
import Book3 from "./assets/Book3.png";
import Book4 from "./assets/Book4.png";
import Book5 from "./assets/Book5.png";
import Book6 from "./assets/Book6.png";
import Girl2 from "./assets/girl2.png";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={Logo} alt="logo" />

          <ul>
            <li>Category</li>
            <li>Trending</li>
            <li>About Us</li>
          </ul>

          <div className="right-div">
            <button className="fButton">Login</button>
            <button className="signUp">Sign up</button>
          </div>
        </nav>
        <img src={Girl1} className="girl1" alt="reader" />
        <div class="header__body">
          <h2>
            Read/Listen and Impact <br /> <span>Interesting Topics</span>
          </h2>
          <h3>
            Read and Share your you best work on our widely search <br />{" "}
            platform and get it noted world wide
          </h3>
          <Button title="Start Reading" font="1rem" />

          <div className="users">
            <img src={Group} alt="users" />
          </div>
        </div>
      </header>

      <section className="section1">
        <h1>
          Read from <br /> Bestseller Authors
        </h1>

        <ul className="categories">
          <li className="active">All</li>
          {BookCategories.map((category) => (
            <li>{category}</li>
          ))}
        </ul>
        <div className="card-container">
          <Card
            author="Malcom Gladwell"
            time="10 hours Read"
            title="Outliers (Story of Success)"
            img={Book1}
          />

          <Card
            author="Damilare Kuti"
            time="10 hours Read"
            title="Nearly All The Men In Lagos Are Mad"
            img={Book2}
          />
          <Card
            author="Chimamanda Adiche"
            time="10 hours Read"
            title="Half of A Yellow Sun"
            img={Book3}
          />
          <Card
            author="Rober T"
            time="8 hours Read"
            title="Rich Dad, Poor Dad"
            img={Book4}
          />

          <Card
            author="Ben Carson"
            time="10 hours Read"
            title="Think Big"
            img={Book5}
          />

          <Card
            author="Ganiu Gbamgbose"
            time="6 hours Read"
            title="Grammar In Discourse Form"
            img={Book6}
          />
        </div>

        <Button title="Continue Reading" font="1.35rem" />
      </section>

      <section className="section2">
        <div className="content">
          <h2>Read/Listen to Interesting Autobiography</h2>
          <h4>
            Read about you favorite icon Legend and Learn from their story
            Autobiography are stories of a person written by the person
            him/herself it ever Educating, entertaining and inspiring, join the
            great mind to read Legend accross all field Notable Successful.
          </h4>
          <ul>
            <li>Legend across all field</li>
            <li>Notable</li>
            <li>Successful</li>
          </ul>
          <Button title="Pick an autobiography" font="1.2rem" />
        </div>
        <div className="image">
          <img src={Girl2} alt="" />
        </div>
      </section>

      <div className="platforms">
        <h3>Listen to Interesting books on your favourite platform</h3>
        <div className="img">
          <div className="">
            <img src="" alt="spotify" />
            <div className="">
              <h4>Spotify</h4>
              <small>Listen Now</small>
            </div>
          </div>
          <div className="">
            <img src="" alt="Audiomack" />
            <div className="">
              <h4>Audiomack</h4>
              <small>Listen Now</small>
            </div>
          </div>
          <div className="">
            <img src="" alt="google_podcast" />
            <div className="">
              <h4>Google Podcast</h4>
              <small>Listen Now</small>
            </div>
          </div>
          <div className="">
            <img src="" alt="iTunes" />
            <div className="">
              <h4>iTunes</h4>
              <small>Listen Now</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
