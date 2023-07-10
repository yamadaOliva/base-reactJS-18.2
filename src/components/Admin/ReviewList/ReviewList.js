import "./ReviewList.css"
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";

export default function ReviewList (){

    const reviewList = [
        {
            name: 'user 1',
            content: 'Scam my money',
            heart: 2,
            dislike: 100,
        },
        {
            name: 'user 2',
            content: 'Scam my money',
            heart: 10,
            dislike: 66,
        },
        {
            name: 'user 3',
            content: 'Scam my money',
            heart: 39,
            dislike: 3,
        },
        {
            name: 'user 4',
            content: 'Scam my money',
            heart: 82,
            dislike: 0,
        },
        {
            name: 'user 3',
            content: 'Scam my money',
            heart: 39,
            dislike: 3,
        },
        {
            name: 'user 4',
            content: 'Scam my money',
            heart: 82,
            dislike: 0,
        },
        {
            name: 'user 4',
            content: 'Scam my money',
            heart: 82,
            dislike: 0,
        },
        {
            name: 'user 1',
            content: 'Scam my money',
            heart: 2,
            dislike: 100,
        },
        {
            name: 'user 2',
            content: 'Scam my money',
            heart: 10,
            dislike: 66,
        },
        {
            name: 'user 3',
            content: 'Scam my money',
            heart: 39,
            dislike: 3,
        },
        {
            name: 'user 4',
            content: 'Scam my money',
            heart: 82,
            dislike: 0,
        },
        {
            name: 'user 3',
            content: 'Scam my money',
            heart: 39,
            dislike: 3,
        },
        {
            name: 'user 4',
            content: 'Scam my money',
            heart: 82,
            dislike: 0,
        },
        {
            name: 'user 4',
            content: 'Scam my money',
            heart: 82,
            dislike: 0,
        },
        {
            name: 'user 3',
            content: 'Scam my money',
            heart: 39,
            dislike: 3,
        },
        {
            name: 'user 4',
            content: 'Scam my money',
            heart: 82,
            dislike: 0,
        },
        {
            name: 'user 1',
            content: 'Scam my money',
            heart: 2,
            dislike: 100,
        },
        {
            name: 'user 2',
            content: 'Scam my money',
            heart: 10,
            dislike: 66,
        },
        {
            name: 'user 3',
            content: 'Scam my money',
            heart: 39,
            dislike: 3,
        },
        {
            name: 'user 4',
            content: 'Scam my money',
            heart: 82,
            dislike: 0,
        },
        {
            name: 'user 4',
            content: 'Scam my money',
            heart: 82,
            dislike: 0,
        },
    ]

    const [maidName, setMaidName] = useState('Maid 1');
    const [textSearch, setTextSearch] = useState('');

    function handleDelete(currentItems, items, index){

    }

    function ItemReview({currentItems}) {
        console.log(currentItems)
        const items = [];
        currentItems && currentItems.map((item, index) => {
            items.push(
                <div className={'item-review'}>
                    <img className={'avt'} src={window.location.origin + "/logo192.png"} alt=""/>
                    <div className={'wrapper'}>
                        <span className={'name'}>ユーザー名：{item.name}</span>
                        <span className={'content'}>内容：{item.content}</span>
                    </div>
                    <div className={'heart'}>
                        {item.heart}
                        <img className={'icon'} src={window.location.origin + "/images/heart.png"} alt=""/>
                    </div>
                    <div className={'dislike'}>
                        {item.dislike}
                        <img className={'icon'} src={window.location.origin + "/images/dislike.png"} alt=""/>
                    </div>
                    <img  onClick={() => handleDelete(currentItems, items, index)} className={'delete'} src={window.location.origin + "/images/delete.png"} alt=""/>
                </div>
            )
        })
        return items;
    }


    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(reviewList.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(reviewList.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % reviewList.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        };

        return (
            <>
                <ItemReview currentItems={currentItems} />
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }

    return (
        <div className={'admin-review-container'}>
            <div className={'admin-review-nav'}>
                <img className={'pre'} src={window.location.origin + "/images/pre.png"} alt=""/>
                <img className={'avt'} src={window.location.origin + "/logo192.png"} alt=""/>
                <label htmlFor="">メイド名： {maidName}</label><br/>
                <span>4.0</span>
                <h7>総合評価</h7><br/>
                <div className={'search'}>
                    <input type="text"
                        onChange={e => {setTextSearch(e.target.value)}}
                    />
                    <img src={window.location.origin + "/images/search-icon.png"} alt=""/>
                </div>
            </div>
            <div className={'admin-review-list'}>
                <div className={'container'}>
                    {/*{ItemReview(reviewList)}*/}
                    <PaginatedItems itemsPerPage={5}/>
                </div>
            </div>
        </div>
    )
}