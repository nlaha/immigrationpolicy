import "./App.css";
import { H2bCount, H2bJobType } from "./Charts";

import { Container, Paper, Typography } from "@material-ui/core";

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <div className="site-title-container">
          <h1 className="site-title">US Immigration</h1>
          <h2 className="site-subtitle">The H-2B Visa Problem</h2>
        </div>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              Positive Argument
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
              Yearly H-2B Certified Positions
            </Typography>
            <Typography variant="body1" gutterBottom>
              If a job is "certified" it means that no US workers could be found
              and is open for H-2B visa applicants. The H-2B visa cap was
              increased in 2017 by former Secretary of Homeland Security, John
              Kelly. However, this was only on an as-needed basis for businesses
              that need H-2B workers to survive. There are also several other
              exemptions from the H-2B cap, see page 3 of{" "}
              <a href="https://cis.org/sites/default/files/2020-10/FY_2019_H-2B_Characteristics_Report_Signed_Dated_4.29.20.pdf">
                this
              </a>{" "}
              document.
            </Typography>
            <H2bCount />
          </div>
        </Paper>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              H-2B Job Type
            </Typography>
            <Typography variant="body1" gutterBottom>
              H-2B workers are primarily taking on lower skill jobs that don't
              require a college degree.
            </Typography>
            <H2bJobType />
            <br></br>
            *Data from 2017
          </div>
        </Paper>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              Negative Argument
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
              Real World Solution
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
      </Container>
      <footer>
        Copyright &copy; Nathan Laha, Solomon Sprenke, William Sperry -{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
