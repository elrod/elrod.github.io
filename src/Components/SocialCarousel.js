import { Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import RedditIcon from '@mui/icons-material/Reddit';
// import XIcon from '@mui/icons-material/X';
import SchoolIcon from '@mui/icons-material/School';

const SocialCarousel = () => {
    return (
    <div>
        <IconButton component={Link} href="https://www.linkedin.com/in/jacopoessenziale/" sx={{color:'#e78474'}} target="_blank" aria-label="LinkedIn">
            <LinkedInIcon />
        </IconButton>
        {/* <IconButton component={Link} href="https://twitter.com/jessenziale" sx={{color:'#e78474'}} target="_blank" aria-label="X">
            <XIcon />
        </IconButton> */}
        <IconButton component={Link} href="https://github.com/elrod" sx={{color:'#e78474'}} target="_blank" aria-label="GitHub">
            <GitHubIcon />
        </IconButton>
        {/* <IconButton component={Link} href="https://www.reddit.com/user/elrod88/" sx={{color:'#e78474'}} target="_blank" aria-label="Reddit">
            <RedditIcon />
        </IconButton> */}
        <IconButton component={Link} href="https://scholar.google.com/citations?user=lMZVH0gAAAAJ&hl=en" sx={{color:'#e78474'}} target="_blank" aria-label="Google Scholar">
            <SchoolIcon />
        </IconButton>
    </div>
    );
  };
  
  export default SocialCarousel;