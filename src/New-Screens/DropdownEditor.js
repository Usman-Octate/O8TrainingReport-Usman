import React, { useState, useImperativeHandle } from 'react';

const DropdownEditor = React.forwardRef((props, ref) => {
    const [value, setValue] = useState(props.value);

    const options = ["Option1", "Option2", "Option3"]; // Add your dropdown options here

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useImperativeHandle(ref, () => ({
        getValue: () => value,
        isPopup: () => true,
    }));

    return (
        <select
            value={value}
            onChange={handleChange}
            style={{ width: '100%' }}
        >
            <option value="">Select...</option>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    );
});

export default DropdownEditor;
