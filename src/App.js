import "./App.css";
import { H2bCount, H2bJobType } from "./Charts";

import { Container, Paper, Typography } from "@material-ui/core";

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <div className="site-title-container">
          <h1 className="site-title">US Immigration</h1>
          <h2 className="site-subtitle">Policymaking Advocacy</h2>
        </div>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              Introduction
            </Typography>
            <Typography variant="body1" gutterBottom>
              Immigration is an issue that has taken center stage in the United
              States over the past decade. It draws a passionate argument from
              both sides of the debate due to its significance to so many people
              with around 14% of the U.S being foreign-born and another 12%
              second generation. Many fear that immigration erodes our welfare
              state and steals American jobs. While others seek the talent the
              rest of the world has to offer. It is our position that
              immigration would be a great benefit to all, lifting the global
              poor from their poverty, and Americans along with them.
            </Typography>
          </div>
        </Paper>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              Positive Argument
            </Typography>
            <Typography variant="body1" gutterBottom>
              Most experts agree that it would be beneficial to the average
              American if many low-skill workers were allowed to enter the US
              each year, almost all experts agree that the average citizen would
              be better off if many high-skill workers were allowed to enter the
              US each year. Immigrants have a large positive effect on the
              communities they live in. Immigrants act as consumers, creating
              more demand for small businesses, and as job creators, creating
              more businesses in the communities they live in. Most immigrants
              are let in through visa programs letting them work in specific job
              areas of the US. An example of this is the H-2B program which,
              with its mere 66,000 worker cap, fails to provide enough workers
              to the industries that it targets.
            </Typography>
          </div>
        </Paper>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              Negative Argument
            </Typography>
            <Typography variant="body1" gutterBottom>
              Despite immigration being one of the most contentious issues in
              the United States, the arguments against it are some of the least
              substantiated out there.
              <br></br>
              <br></br>
              The two most common fears of immigration are that it will either
              lower American wages or steal American jobs. The claim of
              unemployment has never been substantiated in the research. The
              reasons for this have already been covered.
              <br></br>
              <br></br>
              The most popular piece of research supporting the idea that
              immigrants reduce American wages is a{" "}
              <a href="https://www.nber.org/papers/w21588l">study</a> by George
              Borjas from 2015 that claimed that if you changed the methodology
              from the famous{" "}
              <a href="https://www.nber.org/papers/w21588l">card study</a> you
              could find a significant wage drop among high school dropouts(only
              high school dropouts). Borjas’s methods have been intensely
              critiqued seeing as his sample which he cut out of a large sample
              of low-income workers consisted of only 17 people. Economist
              Michael Clemens states that "if we’re willing to take low-skill
              workers in Miami and hand-pick small subsets of them, we can
              always find small groups of workers whose wages rose during a
              particular period and other groups whose wages fell. But at some
              point, we're learning more about statistical artifacts than about
              real-world events." meaning a sample size so small could lead one
              to any conclusion. The predominant view of economists is that of
              the original card study from 1990 that concluded that immigration
              either did not affect or dramatically increased wages of native
              workers. One should also note that Borjas’s{" "}
              <a href="https://www.miamiherald.com/news/local/community/miami-dade/article162682623.html">
                {" "}
                main personal conclusion
              </a>{" "}
              from his own research is not that we should reduce immigration but
              that we should attempt to remedy its side effects with tax policy.
            </Typography>
          </div>
        </Paper>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              H-2B Visas
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
              Racial Equity Impact
            </Typography>
            <Typography variant="body1" gutterBottom>
              As more people immigrate to America, there will be several equity
              impacts to consider. Immigrants in the workforce will help to
              bring diversity, and the strict regulations companies must follow
              when hiring migrant workers will ensure equal treatment (or reduce
              the likelihood of unequal treatment). A racially equitable
              immigration system would provide many different options for entry
              into the US, while still regulating company job listings. The
              racial tensions that already exist can be lessened by diversifying
              the workforce.
              <br></br>
              <br></br>
              There are some potential issues with allowing more immigrants into
              the country, one of which is pushing already underrepresented
              people out of the workforce. However, while this may seem like a
              significant issue, as long as the department of labor keeps it’s
              strict regulations on migrant work visas, simply allowing more
              work opportunities per-year will not cause equity problems.
            </Typography>
          </div>
        </Paper>
        <Paper className="text-panel">
          <div className="content-margin">
            <Typography variant="h5" gutterBottom>
              Works Cited
            </Typography>
            <Typography variant="body1" gutterBottom>
              <div className="citation">
                <p>
                  Bier, David. &ldquo;H-2B Visas: The Complex Process for
                  Nonagricultural Employers to Hire Guest Workers.&rdquo;{" "}
                  <em>Cato Institute</em>, 16 Feb. 2021,
                  www.cato.org/publications/policy-analysis/h-2b-visas-complex-process-nonagricultural-employers-hire-guest-workers#introduction.
                  Accessed 24 Mar. 2021.
                </p>
                <p>
                  Griffith, Bryan. &ldquo;Maps: Impact of H-2B Guest Workers in
                  2017.&rdquo; <em>CIS.org</em>, 2 Apr. 2018,
                  cis.org/Report/Maps-Impact-H2B-Guest-Workers-2017. Accessed 24
                  Mar. 2021.
                </p>
                <p>
                  &ldquo;H-2B Program | U.S. Department of Labor.&rdquo;{" "}
                  <em>Www.dol.gov</em>,
                  www.dol.gov/agencies/whd/immigration/h2b.
                </p>
                <p>
                  &ldquo;Immigration Data &amp; Statistics.&rdquo;{" "}
                  <em>Department of Homeland Security</em>, 26 Feb. 2019,
                  www.dhs.gov/immigration-statistics.
                </p>
                <p>
                  McHugh, Patrick. &ldquo;Impact of H-2B Guestworkers in
                  2018.&rdquo; <em>CIS.org</em>, 31 Dec. 2018,
                  cis.org/Report/Impact-H2B-Guestworkers-2018. Accessed 24 Mar.
                  2021.
                </p>
                <p>
                  Lewis, Ethan. &ldquo;How Immigration Affects Workers: Two
                  Wrong Models and a Right One.&rdquo; <em>Cato Institute</em>,
                  13 Sept. 2017,
                  www.cato.org/cato-journal/fall-2017/how-immigration-affects-workers-two-wrong-models-right-one?queryID=c5215490ff92d062a7b85d278315abec#wrong-model-1-fixed-number-of-jobs.
                  Accessed 25 Mar. 2021.
                </p>
                <p>
                  <em>Igmchicago.org</em>, 2021,
                  www.igmchicago.org/surveys/low-skilled-immigrants/.
                </p>
                <p>
                  <em>Igmchicago.org</em>, 2021,
                  www.igmchicago.org/surveys/high-skilled-immigrants/.
                </p>
              </div>
            </Typography>
          </div>
        </Paper>
      </Container>
      <footer>
        Copyright &copy; {new Date().getFullYear()} Nathan Laha, Solomon
        Sprenke, William Sperry - All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
