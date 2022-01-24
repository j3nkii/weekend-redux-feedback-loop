import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from '../../Header/Header';

export default function Review(){
    const history = useHistory();
    const journalEntry = useSelector(store => store.formReducer)
    console.log(journalEntry);
    const onSubmit = () => {
        axios.post('/form', journalEntry).then(res => {
            console.log('POSTING TO /form', res);
            history.push('/submit')
        }).catch(err => {
            console.log('POST FAILED /form', err);
        })
    }
    return (<>
    <Header />
        <Typography variant="h2" gutterBottom component="div">
            Daily Reflection Review
        </Typography>
        
        <Typography variant="h4" gutterBottom component="div">
            Feeling:
        </Typography>
            <Typography variant="body1" gutterBottom>
                {journalEntry.feeling}
            </Typography>

        <Typography variant="h4" gutterBottom component="div">
            Sleep:
        </Typography>
            <Typography variant="body1" gutterBottom>
                {journalEntry.sleep}
            </Typography>

        <Typography variant="h4" gutterBottom component="div">
            Meals:
        </Typography>
            <Typography variant="body1" gutterBottom>
                {journalEntry.meals}
            </Typography>

        <Typography variant="h4" gutterBottom component="div">
            Journal Entry:
        </Typography>
            <Typography variant="body1" gutterBottom>
                {journalEntry.journal}
            </Typography>

        <Button
            onClick={onSubmit}
            variant="outlined"
        >
            Submit
        </Button>
        </>)
}