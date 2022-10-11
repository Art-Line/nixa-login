import './Checkbox.scss';

function Checkbox(props) {
    const {text} = props;
    return (
        <label className="checkbox-label">
            <input type="checkbox" className="visually-hidden checkbox-input" defaultChecked />
            <span className="checkbox-data"></span>
            <span className="checkbox-text">{text}</span>
        </label>
    )
}

export default Checkbox;