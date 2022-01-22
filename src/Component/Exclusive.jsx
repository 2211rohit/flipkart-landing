import React from 'react';

const Exclusive = (props) =>
{
    return(

        <div className="container-fluid col-xl-10">
            <div className="row">
                <div className="col-xl-4">
                    <img alt="img1" className="col-xl-12 h-100" src={props.excData1}/>
                </div>

                <div className="col-xl-4">
                    <img alt="img2" className="col-xl-12 h-100" src={props.excData2}/>
                </div>
                   
                <div className="col-xl-4">
                    <img alt="img3" className="col-xl-12 h-100" src={props.excData3}/>
                </div>
         
            </div>
        </div>
    )
}
export default Exclusive;