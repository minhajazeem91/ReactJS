import './MyButton.css';
const MyButton = (props) => {
    return(
        <button onClick={props.onClick} className='btn'>{props.text}</button>
    );
}
export default MyButton;