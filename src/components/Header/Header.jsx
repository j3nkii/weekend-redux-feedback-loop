import Typography from '@mui/material/Typography';

export default function Header(){
    return (<>
        <header className='App-header'>
            <Typography
                className='App-title'
                variant="h1"
                component="div"
                gutterBottom
            >
                Daily Reflections!
            </Typography>
        <Typography variant="h4" gutterBottom component="div">
            Be kind to yourself!
        </Typography>
        </header>
    </>)
}