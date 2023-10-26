import Cookie from '../assets/cookie.svg?react';
function NavBar() {
    return (
        <>
            <div className="bg-slate-800 w-screen flex justify-around p-2.5">
                <div className='flex flex-row gap-2'>
                    <Cookie className='w-16 h-16' fill='white'/>
                    <h1>Cookipad</h1>
                </div>
                <button>Login</button>
            </div>
        </>
    )
}

export default NavBar;