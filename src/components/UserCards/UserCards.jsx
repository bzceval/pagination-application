import "./UserCards.scss"

const UserCards = ({ data }) => {
    const { name, age, image, email } = data
    return (
        <div className="user-cards">
            <div className='container'>
                <div className="card mb-4 mt-4" style={{ maxWidth: '540px' }}>
                    <div className="row g-5">
                        <div className="col-4">
                            <img src={image} className="rounded-start" alt="profile-image" />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5>{name}</h5>
                                <p>{email} </p>
                                <p><small className="text-muted">Age {age}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCards