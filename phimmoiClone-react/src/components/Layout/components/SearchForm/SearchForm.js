import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchForm.module.scss';
const cx = classNames.bind(styles);

function SearchForm() {
    const [country, setCountry] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            country,
            genre,
            year,
            type,
        };
        console.log('Submitted values:', payload);
    };

    return (
        <form onSubmit={handleSubmit} className={cx('wrapper')}>
            <div className={cx('filter')}>
                <select className={cx('control')} value={type} onChange={handleTypeChange}>
                    <option>-- Xắp Xếp --</option>
                    <option value="publish_date">Ngày đăng phim</option>
                    <option value="publish_year">Ngày sản xuất </option>
                    <option value="name">Tên phim</option>
                    <option value="view">Lượt xem</option>
                </select>
            </div>
            <div className={cx('filter')}>
                <select className={cx('control')} value={genre} onChange={handleGenreChange}>
                    <option>-- Thể Loại --</option>
                    <option value="1">Cổ Trang - Thần Thoại</option>
                    <option value="2">Võ Thuật - Kiếm Hiệp</option>
                    <option value="3">Phiêu Lưu - Hành Động</option>
                    <option value="4">Tâm Lý - Tình Cảm</option>
                    <option value="5">Hoạt Hình</option>
                    <option value="6">Khoa Học - Viễn Tưởng</option>
                    <option value="7">Hình Sự - Chiến Tranh</option>
                </select>
            </div>
            <div className={cx('filter')}>
                <select className={cx('control')} value={country} onChange={handleCountryChange}>
                    <option>-- Quốc Gia --</option>
                    <option value="1">Việt Nam</option>
                    <option value="2">Trung Quốc</option>
                    <option value="3">Hàn Quốc</option>
                    <option value="4">Thái Lan</option>
                    <option value="5">Hồng Kông</option>
                    <option value="6">Âu - Mỹ</option>
                    <option value="7">Đài Loan</option>
                    <option value="8">Nhật Bản</option>
                    <option value="9">Ấn Độ</option>
                    <option value="10">Canada</option>
                    <option value="11">Khác</option>
                </select>
            </div>
            <div className={cx('filter')}>
                <select className={cx('control')} value={year} onChange={handleYearChange}>
                    <option>-- Năm --</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </select>
            </div>
            <button
                className={cx('btn')}
                type="submit"
                onClick={() => alert('Hiện tại api chưa cung cấp dịch vụ này, vui lòng thử lại sau ...!')}
            >
                Lọc Phim
            </button>
        </form>
    );
}

export default SearchForm;
