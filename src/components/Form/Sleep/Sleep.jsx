import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from '../../Header/Header';
import Typography from '@mui/material/Typography';

export default function Sleep(){
    const dispatch = useDispatch();
    const [sleep, setSleep] = useState('');
    const onNext = () => {
        dispatch({
            type: 'ADD_SLEEP',
            payload: sleep,
        })
    }
    return (<>
            <Header />
            <Typography variant="h2" gutterBottom component="div">
                How well did you sleep last night?
            </Typography>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '60%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Sleep"
                    multiline
                    rows={1}
                    fullWidth={true}
                    value={sleep}
                    onChange={evt => setSleep(evt.target.value)}
                />
            </Box>
            <Link to="/meals" onClick={onNext} style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Next</Button>
            </Link>
        </>)
}