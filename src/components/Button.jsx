function Button(props) {

    return (
      <button
        className={props.class}  
        onClick={props.function}   
      >     
        {props.children} 
      </button>
    );
  } 
  
  export default Button;  