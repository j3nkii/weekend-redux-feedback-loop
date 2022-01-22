import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Header from '../../Header/Header';
import Typography from '@mui/material/Typography';

export default function Feelings(){
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('happy');
    const onNext = () => {
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling,
        })
    }
    return (<>
            <Header />
        <Typography variant="h2" gutterBottom component="div">
            How're you feeling today?
        </Typography>
            <Box 
            sx={{  m: 1}}>
                <Select
                    onChange={evt => setFeeling(evt.target.value)}
                    value={feeling}
                    style={{  m: 1, width: "40%"}}
                >
                    <MenuItem value={'happy'}>Happy</MenuItem>
                    <MenuItem value={'sad'}>Sad</MenuItem>
                    <MenuItem value={'angry'}>Angry</MenuItem>
                    <MenuItem value={'hazy'}>Hazy</MenuItem>
                </Select>
            </Box>
            <Link to="/sleep" onClick={onNext} style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Next</Button>
            </Link>
        </>)
}