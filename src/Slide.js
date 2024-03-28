import { useState } from "react";
import './slide.css'
import { Button } from "bootstrap";

function Slide(){
    const arry = ['Step 1: Learn React','Step 2: Apply first jobs','Step 3: Invest your new income'];
    const [currentPage,setPage] = useState(1);
    const pages = [1,2,3];


    function previousPage (e){
        if(currentPage>1){
            setPage(currentPage =>currentPage-1);
        }
    }

    function nextPage(){
        if(currentPage<3){
            setPage(currentPage =>currentPage+1);

        }
    }

    return (
        <>
            <div className="box">
                <div className="step-count">
                    {pages.map(page=>(
                        page<=currentPage ?(
                            <div className="active">{page}</div>
                        ):(
                            <div>{page}</div>
                        )
                    ))}
                </div>
                <p>{arry[currentPage-1]}</p>

                <div className="btns">
                    {currentPage ==1 ? (
                        <button disabled onClick={previousPage}>previous</button>
                    ):(
                        <button onClick={previousPage}>previous</button>
                    )}
                    {currentPage == 3 ? (
                        <button disabled onClick={nextPage}>next</button>
                    ):(
                        <button onClick={nextPage}>next</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Slide