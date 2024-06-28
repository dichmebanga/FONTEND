import classNames from 'classnames/bind';
import Stylest from './Header.module.scss';
import React, { useRef, useState } from 'react';
import { Wrapper as Popper } from '~/components/Layout/components/Popper';
import FilmItem from '../components/FilmItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSearch } from '~/hooks/useSearch';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(Stylest);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    const searchResult = useSearch(searchValue);

    const inputRef = useRef();

    const navigate = useNavigate();
    const handleDataSearch = () => {
        navigate(`/searchMovie/${searchValue}`);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue);

        if (searchValue.length === 0) {
            setShowResult(false);
        }
        if (searchValue.length > 0) {
            setShowResult(true);
        }
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div className={cx('menu-list')}>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                placement={'bottom-start'}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Popper>
                            <ul className={cx('list-movie')}>
                                <li className={cx('movie-title')}>
                                    Kết quả tìm kiếm cho cho từ khoá: <span>"{searchValue}"</span>
                                </li>
                                <li className={cx('movie-title')}>
                                    <strong>Phim</strong>
                                </li>
                                {searchResult?.map((item) => (
                                    <FilmItem key={item._id} slug={item.slug} data={item} />
                                ))}

                                <li className={cx('movie-title', 'movie-list-end')} onClick={handleDataSearch}>
                                    <p>Tìm tất cả kết quả từ khoá </p>
                                </li>
                            </ul>
                        </Popper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <input
                    className={cx('search-input')}
                    type="text"
                    placeholder="Tên phim, Tên diễn viên..."
                    spellCheck={false}
                    value={searchValue}
                    onChange={handleChange}
                    ref={inputRef}
                    onFocus={() => setShowResult(true)}
                />
            </HeadlessTippy>
            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
        </div>
    );
}

export default Search;
