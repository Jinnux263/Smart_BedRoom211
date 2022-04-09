import { useEffect, useState } from "react"

const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
}

const sliceD = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
}

const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [sliceData, setSliceData] = useState([]);
    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        const slice = sliceD(data, page, rowsPerPage);
        setSliceData([...slice]);
        setTableRange([...range]);
    }, [data, page, rowsPerPage]);
    return {sliceData, tableRange};
}

export default useTable;