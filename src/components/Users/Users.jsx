import React from 'react' 
import UserCards from '../UserCards/UserCards'
import data from "../../utils/data"


const Users = () => {
    return (
        <div>
            {data.map((data, id) => <UserCards key={id} data={data}/>)}
        </div>
    )
}

export default Users