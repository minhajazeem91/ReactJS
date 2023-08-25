import "./Title.css"
const Title = (props) => {
    return (
      <div>
        <h1 className="title"> {props.heading} </h1>
      </div>
    );
  };


  export default Title;