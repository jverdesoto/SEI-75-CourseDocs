import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MovieCard = ({ movie }) => {
    const cardStyle = {
        backgroundImage: `url(${movie.posterPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        width: '200px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '10px',
        position: 'relative',
        marginBottom: '5%'
    }

    const textStyles = {
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        borderRadius: '0 0 4px 4px',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        color: 'white',
    }

    return (
        <Card variant="outlined" style={cardStyle}>
            <CardContent>
                <div style={textStyles}>
                    <p>{movie.title}</p>
                    <p>Release date:</p>
                    <p>{movie.releaseDate}</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default MovieCard;