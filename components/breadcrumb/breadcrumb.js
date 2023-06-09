import { firstCharUpperCase } from '@/services/common';

const Breadcrumb = (props) => {

    const goBackHandler = () => {
        props.onBackHandler();
    };

    return (
        <>
            <ol className="breadcrumb">
                <li className="breadcrumb-item" onClick={goBackHandler}>{props.backText}</li>
                <li className="breadcrumb-item">{firstCharUpperCase(props.name)}</li>
            </ol>
        </>
    );
};

export default Breadcrumb;