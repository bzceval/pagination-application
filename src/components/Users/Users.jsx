import UserCards from '../UserCards/UserCards'
import data from "../../utils/data"
import { useState } from 'react'


const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(3)

    //Get current user
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser)


    return (
        <div>
            {currentUsers.map((currentUsers, id) => <UserCards key={id} data={currentUsers} />)}

        </div>
    )
}

export default Users