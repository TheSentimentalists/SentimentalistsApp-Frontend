import React from 'react';

function ErrorBoundary(props){
    console.log(props.handleError);

 

    return(
    <p>{props.handleError}</p> 

    )
}




export default ErrorBoundary;