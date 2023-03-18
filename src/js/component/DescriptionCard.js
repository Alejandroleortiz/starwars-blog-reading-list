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
                    <div className='col-md-6'>
                        <div className="text-center">
                            <h1>{props?.name}</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Odit commodi voluptates possimus
                                tempora ipsa incidunt libero itaque provident cumque.
                                Esse ipsum excepturi earum est voluptatum nostrum doloribus
                                deserunt explicabo laboriosam.</p>
                        </div>
                        <div className="text-center">
                            <strong>Name</strong>
                            <p>{props?.name}</p>
                        </div>
                        <div className="text-center">
                            <strong>EYE COLOR</strong>
                            <p>{props?.eye_color}</p>
                        </div>
                        <div className="text-center">
                            <strong>HAIR COLOR</strong>
                            <p>{props?.hair_color}</p>
                        </div>
                        <div className="text-center">
                            <strong>GENDER</strong>
                            <p>{props?.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
checkPropTypes = {
    name: checkPropTypes.string,
    eye_color: checkPropTypes.string,
    hair_color: checkPropTypes.string,
    gender: checkPropTypes.string,
};

export default DescriptionCard