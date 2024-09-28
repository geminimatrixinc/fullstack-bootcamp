
// React Forms:
//Basic usage of form elements in React.
const BasicForm = () => {


    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                onChange={handleChange}
            />
        </div>
    );
};

export default BasicForm;
