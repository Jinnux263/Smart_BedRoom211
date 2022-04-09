import React, { useState } from 'react'
import useTable from './useTable'
import '../Pages/Device.css'
import TableFooter from './TableFooter';
export default function Table({data, rowsPerPage}) {
  const [page, setPage] = useState(1);
  const dat = useTable(data, page, rowsPerPage).sliceData;
  const range = useTable(data, page, rowsPerPage).tableRange;
  return (
    <div>
        <div className="limiter">
            <div className="container-table100">
                <div className="wrap-table100">
                    <div className="table100 ver1 m-b-110">
                        <div className="table100-head">
                            <table>
                                <thead>
                                    <tr className="row100 head">
                                        <th className="">Date time</th>
                                        <th className="cell100 column1">Status</th>
                                        <th className="cell100 column1">Automatic</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <div className="table100-body js-pscroll">
                            <table>
                                <tbody>
                                    {dat.map((el) => (
                                        <tr key={el.time}>
                                        <td className="">{el.time.split("T")[0] + " " + el.time.split("T")[1].split(".")[0]}</td>
                                        <td className="cell100 column1">{el.status == 1 ? "ON" : "OFF"}</td>
                                        <td className="cell100 column1">{el.isAuto == 1 ? "ON" : "OFF"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TableFooter range={range} slice={data} setPage={setPage} page={page} />
    </div> 
  )
}
