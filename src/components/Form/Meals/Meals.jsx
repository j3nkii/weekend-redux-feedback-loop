import {useDispatch} from 'react-redux';
import {useState} from 'react';

export default function Meals(){
    const dispatch = useDispatch();
    const [meals, setMeals] = useState('');
    console.log(meals);

    const onNext = () => {
        dispatch({
            type: 'ADD_MEALS',
            payload: meals,
        })
    }

    return (
        <>
            <h2>What did you sleep eat today?</h2>
            <input 
                type="text"
                value={meals}
                onChange={evt => setMeals(evt.target.value)}
            />
            <button onClick={onNext}>
                Next
            </button>
        </>
    )
}