import ContentComponent from '../components/content.jsx'
import FooterComponent from '../components/footer.jsx'
import NavBar from '../components/navbar.jsx';

function MainScreen() {
    return (
        <>
            <NavBar/>
            <ContentComponent/>
            <FooterComponent/>
        </>
    )
}

export default MainScreen;