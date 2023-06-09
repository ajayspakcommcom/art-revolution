
import classes from './wrapper..module.css';

const Wrapper = (props) => {

    const propClass = `container-fluid ${props.className} ${classes.wrapper}`;

    return (
        <div className={propClass}>{props.children}</div>
    );
}

export default Wrapper;
