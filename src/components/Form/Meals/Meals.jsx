import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from '../../Header/Header';
import Typography from '@mui/material/Typography';

export default function Meals(){
    const dispatch = useDispatch();
    const [meals, setMeals] = useState('');
    const onNext = () => {
        dispatch({
            type: 'ADD_MEALS',
            payload: meals,
        })
    }
    return (<>
            <Header />
            <Typography variant="h2" gutterBottom component="div">
                What did you eat today?
            </Typography>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '60%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Meals"
                    multiline
                    rows={1}
                    fullWidth={true}
                    value={meals}
                    onChange={evt => setMeals(evt.target.value)}
                />
            </Box>
            <Link to="/journal" onClick={onNext} style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Next</Button>
            </Link>
        </>)
}