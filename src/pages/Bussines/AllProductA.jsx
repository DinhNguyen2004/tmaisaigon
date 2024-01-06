
import React from "react";
import iProTypeA from '../../DataJson/iProductinvest/typeA.json'
import Pagination from "@mui/material/Pagination";
import { usePagination } from "./../../hooks/pagination";

const AllproductA = (props) => {
    
    const {isMobile} = props
   
 
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //eslint-disable-line
    displayPage,
  ] = usePagination(4, iProTypeA.length);


  return (
    <div>
        {isMobile ? (
            <div>
            {/* Items type 2 */}
            <div className='text-center px-2'>
                <span className='head-content text-hcontent'>Sản phẩm đầu tư</span>    
            </div>
            <div>
        {(() => {
            const displayPosts = [];
            for (let i = startPageIndex; i <= endPageIndex; i++) {
            displayPosts.push(
                <div className='border-box border-4 rounded-lg shadow-2xl shadow-indigo-500/40 p-6 text-center items-center justify-center justify-items-center'>
                    <a href={iProTypeA[i].link}>
                        <img src={iProTypeA[i].img} alt="" />
                        <p>{iProTypeA[i].title}</p>
                        <span>{iProTypeA[i].year}</span>
                    </a>
                </div>
                );
            }
            return  <div className='grid grid-cols-2 grid-rows-2 text-center text-[14px] italic items-center justify-center justify-items-center gap-[30px] mt-6 mx-2'>{displayPosts}</div>;
            })()}               
            </div>
                <div className='flex justify-center mt-6'>
                <Pagination
                    color="primary"
                    count={totalPages}
                    onChange={(event, value) => displayPage(value)}
                />
                </div>
            </div>

        ) : (
            // Lapotp
            <div>
            <div className='text-center px-2'>
            <span className='head-content text-hcontent'>Sản phẩm đầu tư</span>    
        </div>
        <div>
    {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
        displayPosts.push(
            <div className='border-box border-4 rounded-lg shadow-2xl shadow-indigo-500/40 p-6 text-center items-center justify-center justify-items-center'>
                <a href={iProTypeA[i].link}>
                    <img src={iProTypeA[i].img} alt="" />
                    <p>{iProTypeA[i].title}</p>
                    <span>{iProTypeA[i].year}</span>
                </a>
            </div>
            );
        }
        return  <div className='grid grid-cols-2 grid-rows-2 text-center text-[14px] italic items-center justify-center justify-items-center gap-8 mt-6 px-[300px]'>{displayPosts}</div>;
        })()}               
        </div>
            <div className='flex justify-center mt-6'>
            <Pagination
                color="primary"
                count={totalPages}
                onChange={(event, value) => displayPage(value)}
            />
            </div>
        </div>

        )}
    </div>  
  );
};

export default AllproductA;