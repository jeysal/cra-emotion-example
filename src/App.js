/** @jsx jsx */
import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";
import logo from "./logo.svg";

const headerStyles = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <header css={headerStyles}>
        <img src={logo} alt="logo" css={{ height: "40vmin" }} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          css={{ color: "#09d3ac" }}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
