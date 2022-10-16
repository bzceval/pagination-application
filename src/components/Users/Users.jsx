import React from 'react'

const Users = ({ data }) => {

    return (
        <div className='container my-5'> 
            {data.map((item) => {
                const { id, name, age, image, email } = item
                return (
                    <div key={id} className="shadow-lg card mb-5" style={{ maxWidth: '400px' }}>
                        <div className="row g-0">
                            <div className="col-4">
                                <img src={image} className="rounded-start" alt="..." />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h5 className="card-title text-danger">{name}</h5>
                                    <p className="card-text">Age: {age}</p>
                                    <p className="card-text"><small className="text-muted">{email}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div> 
    )
}

export default Users