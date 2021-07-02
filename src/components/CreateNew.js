import React, {useState} from 'react';
import Layout from '../core/Layout';
import InputField from './InputField.js';

const CreateNew = () => {

    const [inputFields, setInputFields] = useState([]);
    const [description, setDescription] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setInputFields(...inputFields, description);
        setDescription('');
    }
    return (
        <Layout>
            <div>
                <div className="inputsadded">
                        {inputFields.map(el => {
                            return(
                                <InputField description={description} />
                            )
                        })}
                </div>
                <div className="hell">
                    <div>
                        <input type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                        <button onClick={handleClick}>ADD</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateNew
