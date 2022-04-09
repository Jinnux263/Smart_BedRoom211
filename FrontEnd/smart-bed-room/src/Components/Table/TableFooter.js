import { useEffect } from "react";
import '../Pages/Device.css'
import { FcNext } from 'react-icons/fc'
import { FcPrevious } from 'react-icons/fc'
const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
      if (slice.length < 1 && page !== 1) {
        setPage(page - 1);
      }
    }, [slice, page, setPage]);
    return (
      <div>
        <button onClick={() => {if (page > 1) {setPage(page - 1)}}} className="previousNext">
            <FcPrevious></FcPrevious>
        </button>
        {range.map((el, index) => el <= 5 ? (
          <button className={page === el ? "pageNumberActive" : "pageNumber"}
            key={index}
            onClick={() => setPage(el)}
          >
            {el}
          </button>
        ): "")}
        <button onClick={() => {if (page < range.length) {setPage(page + 1)}}} className="previousNext">
            <FcNext></FcNext>
        </button>
      </div>
    );
  };
  
export default TableFooter;