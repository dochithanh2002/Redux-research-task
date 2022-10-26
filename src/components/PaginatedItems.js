// React
import React, { Fragment, useState, useEffect } from "react";

// import Pagination lib
import ReactPaginate from "react-paginate";

// import orther component
import Box from "./Box";

function Items({ currentItems }) {
    return (
        <Fragment>
            {currentItems &&
                currentItems.map((item, index) => (
                    <Box
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        key={index}
                    />
                ))}
        </Fragment>
    );
}

export default function PaginatedItems({ itemsPerPage, items }) {
    console.log("items: ", items);

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        console.log(`Loading items from ${itemOffset} to ${endOffset}`);

        setCurrentItems(items.slice(itemOffset, endOffset));
        console.log("currentItems", currentItems);
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <Fragment>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </Fragment>
    );
}
