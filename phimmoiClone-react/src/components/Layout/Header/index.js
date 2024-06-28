import classNames from 'classnames/bind';
import Stylest from './Header.module.scss';
import Category from './ Category';
const cx = classNames.bind(Stylest);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Category />
        </div>
    );
}

export default Header;
