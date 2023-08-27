import './MyButton.css';
const MyButton = (props) => {
    return(
    <div>
        <button onClick={props.onClick} className='btn'>{props.text}</button>
    </div>
 
    );
}
export default MyButton;