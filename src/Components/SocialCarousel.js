import { Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import XIcon from '@mui/icons-material/X';

const SocialCarousel = () => {
    return (
    <div>
        <IconButton component={Link} href="https://www.linkedin.com/in/jacopoessenziale/" target="_blank" aria-label="LinkedIn">
            <LinkedInIcon />
        </IconButton>
        <IconButton component={Link} href="https://twitter.com/jessenziale" target="_blank" aria-label="X">
            <XIcon />
        </IconButton>
        <IconButton component={Link} href="https://github.com/elrod" target="_blank" aria-label="GitHub">
            <GitHubIcon />
        </IconButton>
        <IconButton component={Link} href="https://www.reddit.com/user/elrod88/" target="_blank" aria-label="Reddit">
            <RedditIcon />
        </IconButton>
    </div>
    );
  };
  
  export default SocialCarousel;