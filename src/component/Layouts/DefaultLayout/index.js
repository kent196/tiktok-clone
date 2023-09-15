import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/component/Layouts/components/Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('inner')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
