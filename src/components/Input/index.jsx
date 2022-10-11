import './Input.scss';

function Input(props) {
    const {type, name, className, label, change, errorInput} = props;
    return (
        <label className="default-input-label">
            {errorInput && <span className="default-input-error-text">{errorInput}</span>}
            <span className="visually-hidden">{label}</span>
            <input type={type} name={name} className={className} onChange={change} />
        </label>
    )
}

export default Input;