import classNames from 'classnames/bind';
import IntroMovie from '~/components/Layout/components/IntroMovie/IntroMovie';
import MoiveItem from '~/components/Layout/components/MoiveItem/MoiveItem';
import Footer from '~/components/Layout/Footer/Footer';
import Header from '~/components/Layout/Header';
import Sidebar from '~/components/Layout/Sidebar';
import { useEffect, useState } from 'react';
import styles from '../pages.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Pagination from '~/components/Layout/components/Pagination/Pagination';
import { useApiGetCategory } from '~/hooks/useApiGetCategory';
import { API_ENDPOINTS } from '~/utils/apiClient';
import { SkeletonUi } from '~/components/Layout/components/Skeleton';
import SearchForm from '~/components/Layout/components/SearchForm/SearchForm';
const cx = classNames.bind(styles);
function CategoryMovie() {
    const [categoryMovie, setCategoryMovie] = useState(null);
    const { category } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const pages = searchParams.get('page');
    const [page, setPage] = useState(1);
    useEffect(() => setPage(pages), [pages]);
    const navigate = useNavigate();
    useEffect(() => {
        if (category === 'PHIM BỘ') setCategoryMovie(API_ENDPOINTS.SERIES);
        if (category === 'PHIM LẺ') setCategoryMovie(API_ENDPOINTS.TRENDING);
        if (category === 'PHIM THUYẾT MINH') setCategoryMovie(API_ENDPOINTS.SERIES);
        if (category === 'TV SHOW') setCategoryMovie(API_ENDPOINTS.TVSHOWS);
        if (category === 'PHIM VIETSUB') setCategoryMovie(API_ENDPOINTS.VIETSUB);
        if (category === 'PHIM MỚI') setCategoryMovie(API_ENDPOINTS.NEW);
    }, [category]);
    const { data, totalMovie, isLoading } = useApiGetCategory(categoryMovie, page);
    function handlePageChange(newPage) {
        setPage(newPage);
        searchParams.set('page', newPage);
        navigate({
            search: searchParams.toString(),
        });
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                <IntroMovie contents={{ name: `/ ${category}` }} />

                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <SearchForm />

                        <div className={cx('list-movie')}>
                            {isLoading && (
                                <>
                                    <SkeletonUi />
                                    <SkeletonUi />
                                    <SkeletonUi />
                                    <SkeletonUi />
                                </>
                            )}
                            {data?.map((movie) => (
                                <MoiveItem slug={movie.slug} key={movie._id} data={movie} hide={true} />
                            ))}
                        </div>
                        <Pagination data={totalMovie.totalItems} itemsPerPage={24} onChange={handlePageChange} />
                    </div>
                    <Sidebar />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CategoryMovie;
