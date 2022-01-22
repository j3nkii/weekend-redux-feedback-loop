import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Typography from '@mui/material/Typography';

export default function Submit(){
    return(<>
    <Header />
            <Typography variant="h2" gutterBottom component="div">
                Thanks fo  the entry!
            </Typography>
        <Link to="/">
            <button>
                Another One?
            </button>
        </Link>
    </>)
}