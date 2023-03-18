import React from "react";
import { checkPropTypes } from "prop-types";
import { useContext } from "react";
import { Context } from "../store/appContext";

function DescriptionCard(props) {

    const { store, actions } = useContext(Context);
    console.log(props);

    return (
        <>
            <div className="container">
                <div className="row">
                    <figure className="figure col-md-6">
                        <img src="https://dummyimage.com/800x600/cccccc/f2f2f2.png" style={{ width: "40rem" }} className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                    <div className='col-md-6 text-center'>
                        <h1>{props?.name}</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur 
                            adipisicing elit. Odit commodi voluptates possimus 
                            tempora ipsa incidunt libero itaque provident cumque. 
                            Esse ipsum excepturi earum est voluptatum nostrum doloribus 
                            deserunt explicabo laboriosam.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
checkPropTypes = {
    name: checkPropTypes.string,
  };

export default DescriptionCard