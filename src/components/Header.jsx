import React from "react";

const Header = () =>{
    return (
        <div className="img-principal">
            <div className="px-4 py-5 my-5 text-center">
                <h3 className="display-5 fw-bold text-white">!Pizzería Mamma Mia!</h3>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 text-white">!Tenemos las mejores pizzas que podrás encontrar!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn"></button>
                    </div>
                </div>
            </div>
        </div>          
    );
}

export default Header;