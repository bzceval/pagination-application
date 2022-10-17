import data from "../../utils/data"
const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage, setCurrentPage }) => {

  const pageNumbers = [];
  const currentUserCount = data.length / usersPerPage

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }

  const previousPage = () => {
    currentPage < 2 ? setCurrentPage(currentUserCount) : setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    currentPage === currentUserCount ? setCurrentPage(currentPage === currentUserCount) : setCurrentPage(currentPage + 1)
  }



  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li><a className="page-link" href="#!" onClick={previousPage}>Previous</a></li>
          {pageNumbers.map(number => (
            <li onClick={() => paginate(number)} key={number} className="page-item"> <a href="!#" className="page-link">{number}</a></li>
          ))}
          <li><a className="page-link" href="#!" onClick={nextPage}>Next</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination