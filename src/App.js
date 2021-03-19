import "./App.css";
import OriginMap from "./OriginMap";

import { Container, Paper, Typography } from "@material-ui/core";

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <div className="site-title-container">
          <h1 className="site-title">US Immigration</h1>
          <h2 className="site-subtitle">Current Issues and Policy</h2>
        </div>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              The Current State
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              maximus mollis sem. Sed eu risus neque. Fusce in nunc vestibulum,
              vehicula lectus quis, condimentum velit. Donec eleifend id augue
              porta suscipit. Aenean a eros magna. Ut quis erat id ipsum
              volutpat sagittis et id lorem. Nam pharetra, felis tincidunt
              euismod dignissim, erat elit facilisis erat, a blandit sapien
              massa vel dui. Nullam posuere tincidunt velit, eu elementum quam
              tincidunt at. Proin dapibus vulputate ligula vitae ornare. Proin
              sit amet felis et purus efficitur lacinia. In diam dolor, mollis
              eu nunc in, efficitur ultrices tellus. Aenean sagittis ultrices
              tincidunt. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Phasellus et velit quis
              turpis vulputate bibendum. Donec consectetur congue dui, eget
              lacinia turpis aliquet nec.
            </Typography>
          </div>
        </Paper>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              Possible Solutions
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              maximus mollis sem. Sed eu risus neque. Fusce in nunc vestibulum,
              vehicula lectus quis, condimentum velit. Donec eleifend id augue
              porta suscipit. Aenean a eros magna. Ut quis erat id ipsum
              volutpat sagittis et id lorem. Nam pharetra, felis tincidunt
              euismod dignissim, erat elit facilisis erat, a blandit sapien
              massa vel dui. Nullam posuere tincidunt velit, eu elementum quam
              tincidunt at. Proin dapibus vulputate ligula vitae ornare. Proin
              sit amet felis et purus efficitur lacinia. In diam dolor, mollis
              eu nunc in, efficitur ultrices tellus. Aenean sagittis ultrices
              tincidunt. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Phasellus et velit quis
              turpis vulputate bibendum. Donec consectetur congue dui, eget
              lacinia turpis aliquet nec.
            </Typography>
          </div>
        </Paper>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              US Immigrant flow by country
            </Typography>
          </div>
          <OriginMap />
        </Paper>
      </Container>
      <footer>
        Copyright &copy; Nathan Laha, Solomon Sprenke, William Sperry -{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
