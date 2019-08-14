import React from "react";
import address from "../image/OutlayrAddress.PNG";
import address2 from "../image/OutlayrAddress2.PNG";
import campaigns from "../image/OutlayrCampaigns.PNG";
import campaigns2 from "../image/OutlayrCampaigns2.PNG";
import login from "../image/WorkoutLogin.PNG";
import register from "../image/WorkoutRegister.PNG";
import workout from "../image/WorkoutUser.PNG";
import workout2 from "../image/WorkoutTable.PNG";
import crypto from "../image/CryptoLeft.PNG";
import crypto2 from "../image/CoinMarketCap.PNG";

class MyWork extends React.Component {
  componentDidMount() {
    console.log("hello");
    let textOverImage = document.querySelectorAll(".details");

    for (let i = 0; i < textOverImage.length; i++) {
      textOverImage[i].onclick = function() {
        console.log(this.classList);
        this.classList.toggle("show");
      };
    }
  }

  render() {
    return (
      <div id="main">
        <h1>My Work</h1>
        <p>
          Here is a dashboard of my previous projects. Click on the pictures to
          see more information!
        </p>
        <div className="work-container" id="work">
          <div className="box" onClick={this.handleClick}>
            <div className="imgBox">
              <img className="wide-img" src={address} alt="" />
              <img className="wide-img" src={address2} alt="" />
            </div>
            <div className="details">
              <div className="content">
                <h2>Address List</h2>
                <p>
                  Developed an address list of all merchants, influencers, and
                  customers with SQL Server as database, .Net Core (C#) as the
                  server side, and React (Javascript) for front end development
                  for client.
                </p>
                <ul>
                  <li>
                    The address list is editable and displays a modal when
                    editing.
                  </li>
                  <li>
                    Addresses are deletable and uses shallow React comparisons
                    in order to prevent unwanted rerendering of the whole
                    component.
                  </li>
                  <li>
                    Routing is set so that only users with Admin role types are
                    able to access.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img className="wide-img" src={campaigns} alt="" />
              <img className="wide-img" src={campaigns2} alt="" />
            </div>
            <div className="details">
              <div className="content">
                <h2>Campaigns</h2>
                <p>
                  Developed a list of campaigns that merchants and influencers
                  have participated and is participating in with SQL Server as
                  database, .Net Core (C#) as the server side, and React
                  (Javascript) for front end development for client.
                </p>
                <ul>
                  <li>
                    Edit and deletion of campaigns are also configured to use
                    shallow React comparisons to prevent unwanted rerednering of
                    whole component and page.
                  </li>
                  <li>Pagination and Search bar is accessible for the user.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img className="wide-img" src={login} alt="" />
              <img className="wide-img" src={register} alt="" />
            </div>
            <div className="details">
              <div className="content">
                <h2>Workout Scheduler Login/Register</h2>
                <p>
                  Developed a Login and Register page for a workout scheduling
                  web application using BCrypt and Redis.
                </p>
                <ul>
                  <li>
                    Login utilizes BCrypt for hashing passwords and Redis for
                    session storage.
                  </li>
                  <li>
                    Register component requires validation of email, first/last
                    name, and matching passwords.
                  </li>
                  <li>
                    Password uses regular expression in order to require an
                    uppercase letter, lowercase letter, number, and a special
                    character.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
              <img className="wide-img" src={workout} alt="" />
              <img className="wide-img" src={workout2} alt="" />
            </div>
            <div className="details">
              <div className="content">
                <h2>Workout Scheduler</h2>
                <p>
                  A workout application that takes the user's current compound
                  workout maxes and calculates popular workouts for easy
                  accessibility.
                </p>
                <ul>
                  <li>
                    User is requried to add a strength profile consisting of
                    compound maxes before accessing the dashboard.
                  </li>
                  <li>
                    Maxes are used to calculate warmups and various workouts by
                    calculating specific percentages of the maxes.
                  </li>
                  <li>
                    User is able tupdate maxes and also choose a different
                    percentage for calculations.
                  </li>
                  <li>
                    <a
                      href="https://github.com/kevdev81/WorkoutApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="-IDictionary-code-snippit"
                    >
                      See Code Here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img className="full-img" src={crypto} alt="" />
            </div>
            <div className="details">
              <div className="content">
                <h2>CryptoTracker</h2>
                <p>
                  A simple application that helps track previous holdings of
                  limited cryptocurrencies.
                </p>
                <ul>
                  <li>
                    Uses 3rd party integrations of TradingView interactive
                    charts.
                  </li>
                  <li>
                    Coinbase api is used to retrieve current price data on
                    Bitcoin, Ethereum, and Ripple.
                  </li>
                  <li>
                    <a
                      href="https://github.com/kevdev81/CryptoPortfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="-IDictionary-code-snippit"
                    >
                      See Code Here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img className="full-img" src={crypto2} alt="" />
            </div>
            <div className="details">
              <div className="content">
                <h2>Market Cap Web Scraper</h2>
                <p>
                  Web scraping console application of total coin market cap.
                </p>
                <ul>
                  <li>
                    Simple Coin Market Cap web scraper that inputs the current
                    market cap standings and information into database.
                  </li>
                  <li>
                    <a
                      href="https://github.com/kevdev81/CoinMarketCapWebScraper"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="-IDictionary-code-snippit"
                    >
                      See Code Here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
