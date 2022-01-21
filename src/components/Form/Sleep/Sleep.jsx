import {useDispatch} from 'react-redux';
import {useState} from 'react';

export default function Sleep(){
    const dispatch = useDispatch();
    const [sleep, setSleep] = useState('');
    console.log(sleep);

    const onNext = () => {
        dispatch({
            type: 'ADD_SLEEP',
            payload: sleep,
        })
    }

    return (
        <>
            <h2>How well did you sleep last night?</h2>
            <input 
                type="text"
                value={sleep}
                onChange={evt => setSleep(evt.target.value)}
            />
            <button onClick={onNext}>
                Next
            </button>
        </>
    )
}