import classNames from 'classnames/bind';
import Stylest from './SliderMovie.module.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { useApiGetCategory } from '~/hooks/useApiGetCategory';
import { API_ENDPOINTS } from '~/utils/apiClient';
import { SkeletonUi } from '~/components/Layout/components/Skeleton';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Stylest);
function SliderMovie(props) {
    const {
        toggle = 'block',
        hide,
        autoplaySpeed = true,
        speed = 2000,
        slidesToShow = 5,
        slidesToScroll = 5,
        width,
    } = props;
    const { data, isLoading } = useApiGetCategory(API_ENDPOINTS.SLIDER);

    const ref = useRef(null);
    let settingsNoModules = {
        arrows: false,
        infinite: true,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: autoplaySpeed,
        autoplaySpeed: 4000,
    };
    return (
        <>
            <div className={cx('container')} style={{ display: `${toggle}` }}>
                PHIM ĐỀ CỬ
            </div>
            <div className={cx('wrapper')} style={{ width: `${width}px` }}>
                <div className={cx('slideshow-arrow', 'Slideshow_prev')} onClick={() => ref?.current?.slickPrev()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>

                {isLoading && (
                    <div style={{ padding: '0 10px 0 10px' }}>
                        <SkeletonUi width={190} />
                    </div>
                )}
                <Slider ref={ref} {...settingsNoModules}>
                    {data?.map((movie) => (
                        <Link to={`/detailMovie/${movie?.slug}`}>
                            <div className={cx('item', `${hide && 'item-list'}`)}>
                                <span className={cx('lable')}>{movie.episode_current || 'Full'}</span>
                                <img
                                    className={cx('img', `${hide && 'img-list'}`)}
                                    src={`https://img.hiephanhthienha.com/uploads/movies/${movie.thumb_url}`}
                                    alt={'images'}
                                />
                                <i className={cx('icon-play')}></i>
                                <p className={cx('title', `${hide && 'title-list'}`)}>{movie.name}</p>
                            </div>
                        </Link>
                    ))}
                </Slider>

                <div className={cx('slideshow-arrow', 'Slideshow_next')} onClick={() => ref?.current?.slickNext()}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
        </>
    );
}

export default SliderMovie;
