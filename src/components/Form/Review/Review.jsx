import { useSelector } from 'react-redux';
import axios from 'axios';


export default function Review(){
    const journalEntry = useSelector(store => store.formReducer)
    console.log(journalEntry);
    const onSubmit = () => {
        axios.post('/form', journalEntry).then(res => {
            console.log('POSTING TO /form', res);
        }).catch(err => {
            console.log('POST FAILED /form', err);
        })
    }
    return (<>
            <h2>Daily reflection review</h2>
            <h3>Feeling:</h3>
            <h4>{journalEntry.feeling}</h4>
            <h3>Sleep:</h3>
            <h4>{journalEntry.sleep}</h4>
            <h3>Meals:</h3>
            <h4>{journalEntry.meals}</h4>
            <h3>Journal:</h3>
            <h4>{journalEntry.journal}</h4>
            <button 
                onClick={onSubmit}
            >
                Submit
            </button>
        </>)
}