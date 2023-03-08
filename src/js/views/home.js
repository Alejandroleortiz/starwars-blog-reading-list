import React from "react";
import "../../styles/home.css";
import { FaHeart } from "react-icons/fa"; 


export const Home = () => (
	<>
		<div className="container">
			<h1 className="text-danger">Characters</h1>
			<div className="row">
				<div className="col-md-3">
					<div className="card my-4" style={{ width: "18rem" }}>
						<img src="https://dummyimage.com/400x200/cccccc/f2f2f2.png" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of
								the card's content.
							</p>
							<div className="d-flex justify-content-between px-2">
								<a href="#" className="btn btn-outline-primary">
									Learn More!
								</a>
								<button type="button" class="btn btn-outline-warning"><FaHeart/></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);
