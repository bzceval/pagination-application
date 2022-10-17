import React from 'react'

const UserCards = ({data}) => {
    const {name, age, image, email } = data
    return (
        <div>
            <div className='container my-5'>
                <div className="shadow-lg card mb-5" style={{ maxWidth: '400px' }}>
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={image} className="rounded-start" alt="..." />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title text-danger">{email}</h5>
                                <p className="card-text">Age: {age} </p>
                                <p className="card-text"><small className="text-muted">{name}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCards