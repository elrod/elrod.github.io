import { Container, Box } from '@mui/material';
import BioSection from "./Components/BioSection";

function App() {
  const bioText = "I'm Jacopo Essenziale, and I'm all about videogames.\
  Yep, you heard it right—I turned my passion into my profession as a videogame developer.\
  Currently, I'm rocking it as TechLead and CTO at Funny Tales, an Italian video-game studio.\
  We're cooking up some cool games for Mobile, VR, and XR platforms.\
  But wait, there's more! I'm also a tech enthusiast and a bit of a researcher.\
  Back in the day, I even dipped my toes into academia as a research fellow\
  at the Computer Science department of the University of Milan, Italy.\
  I was on a mission to blend my love for gaming with cutting-edge research,\
  working on rad projects funded by the EC aimed at developing exer-games for various e-health applications.\
  This is my little corner of the web where I'm pumped to share my projects, thoughts,\
  and all things gaming! Welcome aboard!`;";
  const photoUrl = "https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/387836188_10222547299741360_7958869511524754184_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gLYACLXwJTUQ7kNvgGFJ1i1&_nc_ht=scontent-mxp1-1.xx&oh=00_AfD6FILQTchOJ0z7Yv2lsYhFPLvVQBJDCAVIDxMpPTUTJQ&oe=663C31FE";

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        marginTop="10vh"
        alignItems="top"
        minHeight="100vh"
      >
        <BioSection title="Hey there!" photo={photoUrl} bio={bioText} />
      </Box>
    </Container>
  );
}

export default App;
