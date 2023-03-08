import React from 'react'

function DescriptionCard() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <figure className="figure col-md-6">
                        <img src="https://dummyimage.com/800x600/cccccc/f2f2f2.png" style={{ width: "40rem" }} className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                    <div className='col-md-6 text-center'>
                        <h1>Name</h1>
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

export default DescriptionCard