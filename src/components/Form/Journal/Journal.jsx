import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Header from '../../Header/Header';
import Typography from '@mui/material/Typography';


export default function Journal(){
    const dispatch = useDispatch();
    const [journal, setJournal] = useState(''); //useSelector and set state to redux state

    const onNext = () => {
        dispatch({
            type: 'ADD_JOURNAL',
            payload: journal,
        })
    }

    return (<>
            <Header />
            <Typography variant="h2" gutterBottom component="div">
                Good space to write down thoughts:
            </Typography>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '60%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Journal Entry"
                    multiline
                    rows={4}
                    fullWidth={true}
                    value={journal}
                    onChange={evt => setJournal(evt.target.value)}
                />
            </Box>
            <Link to="/review" onClick={onNext} style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Next</Button>
            </Link>
        </>)
}