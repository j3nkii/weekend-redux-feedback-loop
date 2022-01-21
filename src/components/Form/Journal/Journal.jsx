import {useDispatch} from 'react-redux';
import {useState} from 'react';

export default function Journal(){
    const dispatch = useDispatch();
    const [journal, setJournal] = useState('');
    console.log(journal);

    const onNext = () => {
        dispatch({
            type: 'ADD_JOURNAL',
            payload: journal,
        })
    }

    return (
        <>
            <h2>Journal Entry</h2>
            <input 
                type="text"
                value={journal}
                onChange={evt => setJournal(evt.target.value)}
            />
            <button onClick={onNext}>
                Next
            </button>
        </>
    )
}