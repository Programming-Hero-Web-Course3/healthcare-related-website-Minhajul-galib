import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const { Id } = useParams();
    const [details, setDetails] = useState([])
    const [single, setSingle] = useState({})

    useEffect( ()=>{ 
        fetch('/ServicesDetails.json')
        .then(res => res.json())
        .then(data=> setDetails(data.services))
    }, [])
    
    useEffect(() =>{
        
        const findSingleDetails = details.find(singleDetails => singleDetails.id == Id )
            console.log(findSingleDetails);
        setSingle(findSingleDetails)
    }, [details, Id])

    // const {title, by, price, rate, session, comment, description, image } = singleDetail;

    return (
        <div className="main-details">
            <div className="details">
                <h2>{single?.title}</h2>
                <img src={single?.image} alt="" />
                <div className="d-flex justify-content-between">
                <b>Doctor: {single?.by}</b>
                <p>{single?.session}</p>
                </div>
                <p className="description">{single?.description}</p>
                <div className="d-flex justify-content-between">
                <p>Price: {single?.price}</p>
                <p>Comments: {single?.comment}</p>
                </div>

            </div>
        </div>
    );
};

export default Details;