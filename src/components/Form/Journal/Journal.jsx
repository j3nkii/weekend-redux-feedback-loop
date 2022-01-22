import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Journal(){
    const dispatch = useDispatch();
    const [journal, setJournal] = useState('');

    const onNext = () => {
        dispatch({
            type: 'ADD_JOURNAL',
            payload: journal,
        })
    }

    return (<>
            <h2>Journal Entry</h2>
            <input 
                type="text"
                value={journal}
                onChange={evt => setJournal(evt.target.value)}
            />
            <Link to="/review" onClick={onNext}>
                Next
            </Link>
        </>)
}