import './Common.css'
function Navbar()
{
    return(
        <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <h1>Fashion<span>ify</span></h1>
            </div>
            <div className='links-container'>
                <ul className='navbar-links'>
                    <li className='navbar-link'><a href='#'>Home</a></li>
                    <li className='navbar-link'><a href='#' > About</a></li>
                    <li className='navbar-link'><a href='#' >Service</a></li>
                </ul>
            </div>
            <div className='navbar-btn'>
                <button>Login</button>
            </div>
        </div>
        </>
    );
}
export default Navbar