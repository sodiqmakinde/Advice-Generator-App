import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [adviceData, setAdviceData] = useState({ id: null, advice: "" });
  const [loading, setloading] = useState(true);

  useEffect(() => {
    // Fetch and set initial advice when the component mounts
    const getInitialAdvice = async () => {
      const initialAdviceData = await fetchAdvice();
      setAdviceData(initialAdviceData);
      setloading(false);
    };

    getInitialAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      return { id: data.slip.id, advice: data.slip.advice };
    } catch (error) {
      console.error("Error fetching advice:", error);
      return { id: null, advice: "An error occurred while fetching advice." };
    }
  };

  const handleClick = async () => {
    const newAdviceData = await fetchAdvice();
    setAdviceData(newAdviceData);
    setloading(false);
  };
  return (
    <Adviser>
      <div className="mainCard fade-in-fwd">
        <h4>ADVISE #{adviceData.id}</h4>

        {loading ? (
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        ) : (
          <div>
            <p>{adviceData.advice}</p>
          </div>
        )}

        {/* =====DESKTOP SVG */}
        <div className="scg ghosts">
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>

        {/* =====MOBILE SVG */}
        <div className="scg ghost_m ">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>

        {/* -=- */}
        <div className="alignment">
          <div className="changer " onClick={handleClick}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="tradeMark">
        Created By: <a href="wa.me/+2348023542997">Sodiq Makinde &#128233;</a>
      </p>
    </Adviser>
  );
}

export default App;

let Adviser = styled.section`
  .scg {
    padding-bottom: 25px !important;
  }
  svg {
    transition: all 0.3s;
  }
  .tradeMark {
    position: absolute;
    color: white;
    left: 50%;
    bottom: 0;
    color: hsl(193, 38%, 86%);
    transform: translate(-50%, -0%);
    a {
      text-decoration: none !important;
      margin: 0 5px;
      color: hsl(150, 100%, 66%);
    }
  }
  .alignment {
    text-align: center;
  }
  .changer {
    background-color: hsl(150, 100%, 66%);
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transition: all 0.3s;
    left: 50%;
    transform: translate(-50%, -0%);
    // transform: scale(1);
    cursor: pointer;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    &:hover {
      background-color: hsl(217, 19%, 24%);
      svg {
        path {
          fill: hsl(150, 100%, 66%);
        }
      }
    }
  }
  @media (max-width: 608px) {
    .ghosts {
      display: none;
    }
  }
  @media (min-width: 608px) {
    .ghost_m {
      display: none;
    }
  }
  .mainCard {
    max-width: 540px;

    margin: 0 auto;

    text-align: center;
    background-color: hsl(217, 19%, 24%);
    padding: 30px;
    border-radius: 15px;
    position: relative;
    h4 {
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: 3px;
      color: hsl(150, 100%, 66%);
    }
    p {
      font-size: 28px;
      color: hsl(193, 38%, 86%);
      font-weight: 800;
      margin: 30px 0;
      margin-bottom: 35px;
    }
  }
`;
