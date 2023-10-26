import FooterComponent from '../components/footer.jsx'
import NavBar from '../components/navbar.jsx';

function TestScreen() {
    return (
        <>
            <NavBar/>
            <div className='bg-orange-50 flex flex-col text-black'>
                <h1>Test Screen 2</h1>
            </div>
            <FooterComponent/>
        </>
    )
}

export default TestScreen;