import { useState } from "react";

function signup(){
    return (
        <div className= "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="enter name"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0" 
                        />
                
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email">
                        <strong>email</strong>
                    </label>
                    <input 
                        type="email"
                        placeholder="enter email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"    
                    />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>

                        </label>
                        <input 
                            type="password"
                            placeholder="enetr password"
                            name="password"
                            className="form-control rounded-0"
                        />

                    </div>
                    <button types="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                    </form>
                    <p>Alerady ahve an account</p>
                    <button className="btn tbn-default border w-100 bg-light rounded-0 text-decoration-none">
                        login
                    </button>
                

            </div>



        </div>
    );
}

export default signup;