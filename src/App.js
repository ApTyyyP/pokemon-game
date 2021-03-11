import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg from './assets/bg.jpg';

const App = () => {
    return (
        <>
            <Header
                title="Hello React"
                descr="This is block Header"
            />
            <Layout
                title="Layout_1"
                descr="This is block Layout 1"
                urlBg={bg}
            />
            <Layout
                title="Layout_2"
                descr="This is block Layout 2"
                colorBg="red"
            />
            <Layout
                title="Layout_3"
                descr="This is block Layout 3"
                urlBg={bg}
            />
            <Footer />
        </>
    );
}

export default App;