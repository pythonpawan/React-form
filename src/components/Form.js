import React from 'react'

export default function form() {
    return (

        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Name</label>
                        <input type="Name" className="form-control" id="inputName" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>



                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
            <ul className="list-unstyled list-inline text-center py-2">
                <li className="list-inline-item">
                    <button type="button" className="btn btn-danger">Signup with Google</button>
                </li>
                <li className="list-inline-item">
                    <button type="button" className="btn btn-primary">Signup with Facebook</button>
                </li>
            </ul>



        </div>





    );
}
