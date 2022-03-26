import React from 'react';
import './Answers.css'

const Answers = () => {
    return (
        <div>            
            <div className='question-container'>
                <h1>How React Work?</h1>
                <p>React works in declarative code.</p>
            </div>  
            <div className='question-container'>
            <h1>What is difference between props and state?</h1>
                <table>
                    <tr>
                        <th>props</th><th>state</th>
                    </tr>
                    
                    <tr>
                        <td>props are read-only. </td><td>state can be changed and changes asynchronously.</td>
                    </tr>
                    <tr>
                        <td>Props can pass data from one component to other components as an argument.</td><td>State stores information about the components.</td>
                    </tr>
                    <tr>
                        <td>Props can be accessed by the child component.</td><td>State cannot be accessed by child components.</td>
                    </tr>
                    <tr>
                        <td>Props make components reusable.</td><td>State cannot make components reusable.</td>
                    </tr>
                    
                </table>
            </div>          
        </div>
    );
};

export default Answers;