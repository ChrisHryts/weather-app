export const containerStyles = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/picture/sky.jpeg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '550px',
  height: '400px',
  position: 'fixed',
  top: '20vh',
  left: '30vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '20px',
  borderRadius: 2,
  gap: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.35)',
};

export const boxInputButtonStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  width: '100%',
  gap: '10px',
};

export const inputStyles = {
  zIndex: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.35)',
  borderRadius: 2,
  flex: '1',
  marginRight: '10px',
};

export const buttonStyles = {
  height: '100%',
  backgroundColor: '#0a5084',
  '&:hover': {
    backgroundColor: '#eba000',
  },
  fontWeight: 'bold',
};

export const infoBoxStyles = {
  display: 'flex',
  gap: '10px',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  marginTop: '10px',
};

export const cardStyles = {
  background: 'none',
  boxShadow: 'none',
  color: 'inherit',
  flex: '1',
  border: '1px solid rgba(0, 0, 0, 0.23)',
  borderRadius: '4px',
  padding: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.35)',
};

export const cityStyles = {
  display: 'inline',
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: '#0a5084',
  marginRight: '5px',
};

export const dateStyles = {
  display: 'inline',
  color: '#0a5084',
  fontStyle: 'italic',
};

export const infoDetailsBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};
