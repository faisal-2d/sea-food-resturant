import React from 'react';
import './Answers.css'

const Answers = () => {
    return (
        <div>            
            <div className='question-container'>
                <h1>How React Work?</h1>
                <p>We create components which are the building block of React. Components tells React what to show on the screen. React creats a virtual DOM and compares with the original DOM. When the data changes, React will efficiently update and re-render the components.</p>
                <p>We build bunch of isolated and reusabel components and compose them together to create complex user interfaces.</p>
                <p>Every react application is a tree of component. Because, in every react app, there is a root component that contains other components.</p>
            </div>  
            <div className='question-container'>
            <h1>What are the differences between props and state?</h1>
                <table>
                    <thead>
                        <tr>
                        <th>Props</th><th>State</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    <tr>
                        <td>Props are read-only. </td><td>State can be changed and changes asynchronously.</td>
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
                    
                    </tbody>
                </table>
            </div>          
        </div>
    );
};

export default Answers;