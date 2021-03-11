
/*import s from './style.module.css';

import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

const Header = ({ title, descr }) => {
    return (
        <div className={s.root} style={styleRoot}>
            <div className={s.container}>
                <ReactLogo />
                {
                    title && (<h1 className={s.header}>
                        {title}
                    </h1>)
                }
                {descr && <p className={s.paragraph}>{descr}</p>}
            </div>
        </div>
    )
}*/

import s from './style.module.css';

const Header = ({ title, descr }) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>This is title</h1>
                <p>This is Description!</p>
            </div>
        </header>
    );
}

export default Header;