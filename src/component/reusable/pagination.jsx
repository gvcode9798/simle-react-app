import _ from 'lodash'
const Pagination = ({ itemsCount,pageSize,onPageChange,currentPage }) => {
    const pageConut = Math.ceil(itemsCount / pageSize)
    console.log("page Count = ",pageConut)
    const pages = _.range(1,pageConut+1)
    return (
    <div>
        {(itemsCount>pageSize)?(<nav>
            <ul className="pagination ">
            
                {pages.map(page => (
                    
            <li className={page===currentPage?"page-item active":'page-item'} onClick={()=>onPageChange(page)}>
                        <a className="page-link ">{ page}</a>
            </li>
                ))}
            
        </ul>
        </nav >):(<p></p>)}</div>
            );
        }
        
        export default Pagination;
            