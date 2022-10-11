import './Button.scss';

function Button(props) {
    const {type, className, click, text} = props;
    return (
        <button type={type} className={className} onClick={click}>{text}</button>
    )
}

export default Button;