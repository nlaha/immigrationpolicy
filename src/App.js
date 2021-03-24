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
              Intro
            </Typography>
            <Typography variant="body1" gutterBottom>
              The H-2B visa is a program made for companies who cannot fill
              their positions with US workers. If a company cannot find a worker
              for a specific position, they may look to H-2B work. People who
              apply for H-2B positions are granted a temporary visa to work in
              non-agricultural fields. These positions are typically low skill,
              but pay above the average minimum wage. There is a cap on 66,000
              H-2B workers each fiscal year, this cap has various exceptions,
              but the large majority of H-2B workers do not qualify for said
              exceptions.
              <br></br>
              <br></br>
              These H-2B positions are heavily regulated by the federal
              government. There are many restrictions put in place to keep H-2B
              workers safe, as such, positions must be certified for H-2B work.
              Even with all of the paperwork and processing companies must do to
              create H-2B positions, there is more demand than ever. H-2B
              positions have been steadily increasing over the past 20 years.
              <br></br>
              <br></br>
              While the number of positions have been increasing, the cap of
              66,000 H-2B visas has remained the same (with some minor
              exceptions, see "Yearly H-2B Certified Positions").
            </Typography>
          </div>
        </Paper>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              Positive Argument
            </Typography>
            <Typography variant="body1" gutterBottom>
              Many US Businesses are suffering from worker shortages due to the
              H-2B cap. Exceptions like{" "}
              <a href="https://www.dhs.gov/news/2017/07/17/dhs-provides-relief-american-businesses-danger-suffering-irreparable-harm">
                Form I-129
              </a>{" "}
              do not apply to many positions and are not garunteed. Some argue
              that increasing the H-2B cap will take jobs away from hard working
              Americans, specifically those in lower skill jobs where H-2B
              workers are in high demand. However, the current state of the H-2B
              visa program prevents this from happening. H-2B work is only
              permitted in situations where no US workers can be found for a
              given position. On top of that, extra expenses and documentation
              required for H-2B workers often means companies must pay more to
              hire said workers. There is no motive for a company to hire H-2B
              workers unless they have exhausted all other local options.
              <br></br>
              <br></br>
              In addition to this, the shortage of low skill American workers
              will only become worse as years progress. Since the year 2000, the
              percent of adults with a bachelors degree or higher has risen 8.4%
              and this has been the trend since the 1940s, it's reasonable to
              assume it will continue to rise. With the steady increase in
              educational attainment, there is also a decrease in the number of
              people looking for low skill jobs.
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
