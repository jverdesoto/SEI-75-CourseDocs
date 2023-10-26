export default function ActorCard({ actor }) {
    const cardStyle = {
      background: `url(https://picsum.photos/200)`,
      backgroundSize: 'cover',
      borderRadius: '8px',
      height: '300px',
      width: '200px', 
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: '#fff',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      margin: '10px'
    };
  
    return (
      <div style={cardStyle} className="item-card">
        <div className="title">
          <h1>{actor}</h1>
        </div>
      </div>
    );
  }
  