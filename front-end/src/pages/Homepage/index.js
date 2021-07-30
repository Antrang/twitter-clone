import TwitterSvg from '../../components/TwitterSvg'
import LoginSignup from '../../components/LoginSignup'
import styles from './index.module.css'

function Home(props) {
    return (
        <div className="container-fluid">
            <div className={["row", styles.homeMain].join(" ")}>
                <div className={["col-md p-2", styles.homeRightBg, styles.hideDiv].join(" ")}>
                    <TwitterSvg />
                    <LoginSignup />
                </div>
                <div className={["col-md", styles.homeLeftBg].join(" ")}>
                    <TwitterSvg />
                </div>
                <div className={["col-md p-2", styles.homeRightBg, styles.showDiv].join(" ")}>
                    <TwitterSvg />
                    <LoginSignup />
                </div>
            </div>
        </div>
    );
}

export default Home;