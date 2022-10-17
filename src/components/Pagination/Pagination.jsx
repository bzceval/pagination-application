import { useState } from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {

  const [currentButton, setCurrentButton] = useState(1)

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center ">
          {pageNumbers.map(number => (
            <li onClick={() => paginate(number)} key={number} className="page-item"> <a href="!#" className="page-link">{number}</a></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination

{/* <li className={`${currentButton === 1 ? "page-item disabled" : "page-item"}`}><a className="page-link" href="#!" onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Previous</a></li>
          {pageNumbers.map((page, index) => {
             return(<li key={index} className={`${currentButton === page ? "page-item active" : "page-item"}`}><a className="page-link" href="#!">{page}</a></li>)
          })}
          <li className={`${currentButton === pageNumbers.length ? "page-item disabled" : "page-item"}`}><a className="page-link" href="#!" onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev + 1)}>Next</a></li> */}