/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import Stylest from './Footer.module.scss';

const cx = classNames.bind(Stylest);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('desc')}>
                    <p>
                        <b>Xem phim hay </b>
                        miễn phí chất lượng cao với phụ đề tiếng việt - thuyết minh - lồng tiếng. Mọt phim có nhiều thể
                        loại phim phong phú, đặc sắc, nhiều bộ phim hay nhất - mới nhất.
                    </p>
                    <p>
                        Website MọtPhimTV với giao diện trực quan, thuận tiện, tốc độ tải nhanh, với độ tin cậy cao hứa
                        hẹn sẽ đem lại những trải nghiệm tốt nhất cho người dùng.
                    </p>
                </div>
                <div className={cx('info')}>
                    <div className={cx('column')}>
                        <div className={cx('heading')}>Quy định</div>
                        <li>Điều khoản chung</li>
                        <li>Chính sách riêng tư</li>
                    </div>
                    <div className={cx('column')}>
                        <div className={cx('heading')}>Giới Thiệu</div>
                        <li>Trang chủ</li>
                        <li>Facebook</li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
