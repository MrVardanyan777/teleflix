const Pagination = function (data, page, handleClick) {
    let buttunos = [];
    for (let i = 0; i < data.length / 2; i = i + 2) {
        buttunos.push(
        <button className="page-btn"
            style={page === i / 2 + 1 ? { backgroundColor: '#000000', color: '#ffffff'} : null}
            onClick={handleClick}
            key={i} id={i / 2 + 1}>
            {i / 2 + 1} 
        </button>)
    }
    return buttunos;
}

export default Pagination;