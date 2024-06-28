import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import DetailMovieItem from '~/components/Layout/components/DetailMovieItem';
import IntroMovie from '~/components/Layout/components/IntroMovie/IntroMovie';
import { SkeletonDetail } from '~/components/Layout/components/Skeleton';
import Footer from '~/components/Layout/Footer/Footer';
import Header from '~/components/Layout/Header';
import Sidebar from '~/components/Layout/Sidebar';
import { useGetDetailMovie } from '~/hooks/useGetDetailMovie';
import styles from '../pages.module.scss';

const cx = classNames.bind(styles);

function DetailMovie() {
    const { film } = useParams();
    const { data, name, intro, isLoading } = useGetDetailMovie(film);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <IntroMovie contents={{ name, intro }} />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {(isLoading && <SkeletonDetail />) || <DetailMovieItem movie={data} film={film} />}
                </div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default DetailMovie;
