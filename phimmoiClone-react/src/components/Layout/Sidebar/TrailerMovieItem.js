import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import images from 'src/assets/images';

const cx = classNames.bind(styles);
function TrailerMovieItem({ slug, data }) {
    return (
        <div className={cx('film-item')}>
            <Link to={`/detailMovie/${slug}`}>
                <img alt="" className={cx('avatar')} src={`https://img.hiephanhthienha.com/uploads/movies/${data.thumb_url}`} />
            </Link>
            <Link to={`/detailMovie/${slug}`} className={cx('name')}>
                {data.name}
            </Link>
            <p className={cx('real-time')}>{data.year}</p>
            <p className={cx('start')}>
                <img alt="star" src={images.start} />
                <img alt="star" src={images.start} />
                <img alt="star" src={images.start} />
                <img alt="star" src={images.start} />
                <img alt="star" src={images.start} />
            </p>
        </div>
    );
}

export default TrailerMovieItem;
