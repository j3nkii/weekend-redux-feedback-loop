import {useDispatch} from 'react-redux';
import {useState} from 'react';

export default function Feelings(){
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('happy');
    console.log(feeling);

    const onNext = () => {
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling,
        })
    }

    return (
        <>
            <h2>How're you feeling today?</h2>
            <select onChange={evt => setFeeling(evt.target.value)} name="feelings" id="feelings">
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
                <option value="hazy">Hazy</option>
            </select>
            <button onClick={onNext}>
                Next
            </button>
        </>
    )
}