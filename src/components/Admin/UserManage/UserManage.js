//scss
import Header from '../../Header/Header'
import InforUser from './InforUser'
import './UserManage.scss'
import { FaSearch } from 'react-icons/fa'

const UserManage = () => {
    return (
        <>
            <div className="container-usermanage">
                <div className="header-page">
                    <Header />
                </div>
                <div className="content-page">
                    <div className="content-page__left">
                        <div className="search-user-table">
                            <div className="search-user-table__title">ユーザー管理</div>
                            <div className="search-user-table__search">
                                <FaSearch size={25} className='icon-search' />
                                <input type="text" placeholder="ユーザー名" />
                            </div>
                            <div className="search-user-table__infor">
                                <div className="search-user-table__infor__detail">
                                    総ユーザー数: 100
                                </div>
                                <div className="search-user-table__infor__detail">
                                    禁止されたユーザー: 10
                                </div>
                            </div>
                            <div className="search-user-table__btn">
                                <div className="search-user-table__btn__sort">
                                    IDで並べ替える
                                </div>
                                <div className="search-user-table__btn__sort">
                                    時間順で並べ替える
                                </div>
                                <div className="search-user-table__btn__block">
                                    禁止を隠す
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-page__right">
                        <div className="user__manage__contain">
                            <InforUser />
                            <InforUser />
                            <InforUser />
                            <InforUser />
                            <InforUser />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default UserManage