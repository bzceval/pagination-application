import "./UserCards.scss"

const UserCards = ({data}) => {
    const {name, age, image, email } = data
    return (
        <div className="user-cards">
            <div className='container user-card'>
                <div className="shadow-lg card m-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-2">
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