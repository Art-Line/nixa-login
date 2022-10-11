import './Input.scss';

function Input(props) {
    const {type, name, className} = props;
    return (
        <label className="input-label">
            <input type={type} name={name} className={className} />
        </label>
    )
}

export default Input;