const Box = ({ clicked, id, color, setClicked }) => {
    const clickh = (color) => {
      setClicked(color);
    };
  
    return (
      <div
        key={color}
        className={color}
        onClick={() => {
          clickh(color);
        }}
      >
        {clicked === color ? "clicked" : null}
      </div>
    );
  };
  
  export default Box;
  