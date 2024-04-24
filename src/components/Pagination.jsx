
const Pagination = ({setPage}) => {
    // const pages =[];
    // for(let i = 1; i < 11 ; i++){
    //     pages.push(i);
    // }
const handleSpanActive = (e) => {
    e.target.parentElement.querySelectorAll("span").forEach(item => {
        item.classList.remove("active")
    });
    e.target.classList.add("active")
    setPage(e.target.textContent);
}

  return (
    <div className="text-center">
        <span className="text-primary bg-warning border border-primary px-3 py-2 active " onClick={handleSpanActive} type="button">1</span>
        <span className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">2</span>
        <span className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">3</span>
        <span className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">4</span>
        <span className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">5</span>
        <span className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">6</span>
        <span className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">7</span>
        <span className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">8</span>
        <span className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">9</span>
        <span className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">10</span>
        {/* {
            pages.map(page => <span key={page} className="text-primary bg-warning border border-primary px-3 py-2  " onClick={handleSpanActive} type="button">{page} </span>)

        } */}
    </div>
  )
}

export default Pagination;