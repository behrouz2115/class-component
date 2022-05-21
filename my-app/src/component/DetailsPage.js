import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage =()=> {
    const params=useParams();
    // console.log(params);
    
        return (
            <div>
                <h1>DetailsPage_ {params.id}</h1>
            </div>
        );
    
}

export default DetailsPage;