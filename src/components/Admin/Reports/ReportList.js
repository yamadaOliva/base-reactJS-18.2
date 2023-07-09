import "./ReportList.css"
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import Switch from "react-switch";

export default function ReportList(){

    const [checked, setChecked] = useState(false);
    const reportList = [
        {
            userName: 'user 1',
            maidName: 'Maid 1',
            title: 'Scam my money',
            content: 'abcxyz....'
        },
        {
            userName: 'user 2',
            maidName: 'Maid 2',
            title: 'Scam my money',
            content: 'abcxyz....'
        },
        {
            userName: 'user 3',
            maidName: 'Maid 3',
            title: 'Scam my money',
            content: 'abcxyz....'
        },
        {
            userName: 'user 4',
            maidName: 'Maid 4',
            title: 'Scam my money',
            content: 'abcxyz....'
        },
        {
            userName: 'user 1',
            maidName: 'Maid 1',
            title: 'Scam my money',
            content: 'abcxyz....'
        },
        {
            userName: 'user 1',
            maidName: 'Maid 1',
            title: 'Scam my money',
            content: 'abcxyz....'
        },
        {
            userName: 'user 1',
            maidName: 'Maid 1',
            title: 'Scam my money',
            content: 'abcxyz....'
        },
    ]
    function handleOnChange(checked){
        setChecked(checked);
    }

    function ItemReport({currentItems}) {
        const items = [];
        currentItems && currentItems.map((item, index) => {
            items.push(
                <div className={'item-report'}>
                    <img className={'avt'} src={window.location.origin + "/logo192.png"} alt=""/>
                    <div className={'wrapper'}>
                        <div className={'user'}>
                            <span className={'user'}>ユーザー名：user 1</span>
                            <img src={window.location.origin + "/images/next.png"} alt=""/>
                            <span className={'maid'}>ユーザー名：maid 1</span>
                        </div>
                        <span className={'title'}>タイトル：scam my money</span>
                        <span className={'content'}>内容：abcxyz...</span>
                        <div className={'actions'}>
                            <div className={'switch'}>
                                <span>処理された</span>
                                <Switch
                                    onChange={handleOnChange}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    offHandleColor='#F06E6E'
                                    onHandleColor='#71F06E'
                                    onColor='#888888'
                                 checked={checked}/>
                            </div>
                            <div className={'action'}>
                                <img src={window.location.origin + "/images/eye.png"} alt=""/>
                            </div>
                            <div className={'action'}>
                                <img src={window.location.origin + "/images/delete.png"} alt=""/>
                            </div>
                        </div>
                    </div>
                    <img className={'avt'} src={window.location.origin + "/logo192.png"} alt=""/>
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
            setCurrentItems(reportList.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(reportList.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % reportList.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        };

        return (
            <>
                <ItemReport currentItems={currentItems} />
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
        <div className={'admin-report-container'}>
            <div className={'admin-report-nav'}>
                <h4>レポート管理</h4>
                <div className={'search'}>
                    <input type="text"

                    />
                    <img src={window.location.origin + "/images/search-icon.png"} alt=""/>
                </div>
                <div className={'search'}>
                    <input type="text"

                    />
                    <img src={window.location.origin + "/images/search-icon.png"} alt=""/>
                </div>
                <div className={'content'}>総レポート数: 100<br/>
                    処理された: 5<br/>
                    今日の新しい: 20</div>
                <button className={'btn-1'}>
                    IDで並べ替える
                </button><br/>
                <button className={'btn-2'}>
                    時間順に並べ替える
                </button><br/>
                <button className={'btn-3'}>
                    未処理を表示
                </button>
            </div>
            <div className={'admin-report-list'}>
                <div className={'container'}>
                    <PaginatedItems itemsPerPage={5}/>
                </div>
            </div>
        </div>
    )
}