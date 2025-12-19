import React from 'react'
import { Link } from 'react-router-dom'

function Aside() {
    return (
        <>
            <aside className="bg-white shadow h-100 pt-3" >

                <nav>
                    <Link
                        to="/dashboard"
                        className="d-block px-4 py-2 text-decoration-none text-dark hover-bg"
                    >
                        Home
                    </Link>

                    <Link
                        to="/addcategory"
                        className="d-block px-4 py-2 text-decoration-none text-dark hover-bg"
                    >
                        Add Category
                    </Link>

                    <Link
                        to="/addproduct"
                        className="d-block px-4 py-2 text-decoration-none text-dark hover-bg"
                    >
                        Add Product
                    </Link>

                    <Link
                        to="/orders"
                        className="d-block px-4 py-2 text-decoration-none text-dark hover-bg"
                    >
                        Orders
                    </Link>

                    <Link
                        to="/login"
                        className="d-block px-4 py-2 fw-bold text-danger text-decoration-none hover-light"
                    >
                        Logout
                    </Link>
                </nav>

            </aside>


        </>
    )
}

export default Aside