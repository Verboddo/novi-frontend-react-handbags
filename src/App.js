import React, {Fragment} from 'react';
import './App.css';
import Button from "./component/Button";
import Bags from "./component/Bags";
import Footer from "./component/Footer";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import ourStory from './assets/our_story.png'

function App() {
  return (
      <Fragment>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button buttonText='to the collection'/>
            <Button buttonText='shop all bags'/>
            <Button disabled={true} buttonText='pre-orders'/>
        </nav>
          <main>
              <Bags
                bagLabel="Best seller"
                image={bag1} imageText='bag2'
                bagName='The handy bag'
                bagPrice='€400,-'
              />
              <Bags
                  bagLabel="Best seller"
                  image={bag2} imageText='bag2'
                  bagName='The stylish bag'
                  bagPrice='€250,-'
              />
              <Bags
                  bagLabel="New collection"
                  image={bag3} imageText='bag3'
                  bagName='The simple bag'
                  bagPrice='€300,-'
              />
              <Bags
                  bagLabel="New collection"
                  image={bag4} imageText='bag4'
                  bagName='The trendy bag'
                  bagPrice='€150,-'
              />
          </main>
          <footer>
              <Footer
                name="THE BRAND"
                pharagraph={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi consequatur doloribus earum hic ipsa ipsum laudantium magnam nihil, numquam, odit, officia optio placeat repellendus sequi temporibus tenetur velit veritatis!",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi consequatur doloribus earum hic ipsa ipsum laudantium magnam nihil, numquam, odit, officia optio placeat repellendus sequi temporibus tenetur velit veritatis!"]}
              />
              <Footer
                image={brand}
              />
              <Footer
                  image={ourStory}
              />
              <Footer
                name="OUR STORY"
                pharagraph={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi consequatur doloribus earum hic ipsa ipsum laudantium magnam nihil, numquam, odit, officia optio placeat repellendus sequi temporibus tenetur velit veritatis!"]}
              />

          </footer>
      </Fragment>
  );
}

export default App;