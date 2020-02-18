import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
    return (
        <div className='book'>
            <div className='title'>
                The Title
            </div>
            <div className="Author">
                The Author
            </div>
            <ul className='stats'>
                <li className='rating'>
                    5 Stars
                </li>
                <li className='isbn'>
                    12-345678910
                </li>
            </ul>

            <div>
                Newline
                Test
            </div>

            <div>
                Empty

                Newlines

                Here
            </div>

            <div>
                &nbsp;Non-breaking
                &nbsp;Spaces&nbsp;
            </div>

            <div>
                Line1
                {' '}
                Line2
            </div>

        </div>
    )
}


function Greetings() {
    let username = undefined;

   return (
       React.createElement('div', {}, !username ? 'Not Logged In' :'Hello ' + username)
   )

}

function Test() {
    let x = undefined;

   return (
    <div>
        "hello"
    </div>
    )

}

//Finish exericse 6. pg-39


ReactDOM.render(
    <Test/>,
    document.querySelector('#root')
);