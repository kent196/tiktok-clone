import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

function SideBar() {
    const cx = classNames.bind(styles);
    return (
        <aside className={cx('wrapper')}>
            <h2> Sidebar</h2>
        </aside>
    );
}

export default SideBar;
