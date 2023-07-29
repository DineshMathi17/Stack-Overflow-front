import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import Avatar from '../Avatar/Avatar'
import { setCurrentUser } from "../../actions/currentUser"
import decode from "jwt-decode"

export default function Navbar(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    var User = useSelector((state)=>(state.currentUserReducer))

    function handlelogout(){
      dispatch({type:'LOGOUT'});
      navigate('/')
      dispatch(setCurrentUser(null))
    }
    

    useEffect(()=>{
      const token = User?.token
      if(token){
        const decodeToken = decode(token)
        if(decodeToken.exp * 1000 < new Date().getTime()){
          handlelogout()
        }
      }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])


    return(
        <nav className="main-nav">
            <div className="navbar">
          <Link to='/' className="nav-item nav-logo">
            <svg width="189" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" d="M23 34l.8-3-16.1-3.3L7 31l16 3zM9.2 23.2l15 7 1.4-3-15-7-1.4 3zm4.2-7.4L26 26.4l2.1-2.5-12.7-10.6-2.1 2.5zM21.5 8l-2.7 2 9.9 13.3 2.7-2L21.5 8zM7 38h16v-3H7v3z" fill="#F48024"/>
            <path xmlns="http://www.w3.org/2000/svg" d="M42 31l-2.2-.2c-1.7-.1-2.3-.8-2.3-2 0-1.4 1-2.2 3-2.2 1.3-.1 2.6.3 3.6 1.1l1.3-1.3a7.5 7.5 0 00-4.8-1.4c-2.9 0-4.9 1.5-4.9 3.9 0 2.2 1.4 3.4 4 3.6l2.2.2c1.6.1 2.2.8 2.2 2 0 1.6-1.4 2.4-3.6 2.4-1.6.1-3.1-.5-4.2-1.6L35 36.8c1.5 1.4 3.5 2 5.5 1.9 3.2 0 5.5-1.5 5.5-4.1 0-2.6-1.6-3.4-4-3.6zm15.8-6.1c-2.2 0-3.5.4-4.7 1.9l1.3 1.3a3.6 3.6 0 013.4-1.5c2.5 0 3.4 1 3.4 2.9v1.3h-4c-3 0-4.6 1.5-4.6 3.9 0 1 .3 2 1 2.7.8.9 1.9 1.2 3.8 1.2 1.4.1 2.9-.4 3.9-1.4v1.3h2v-9.1c-.1-2.9-1.9-4.5-5.5-4.5zm3.4 8.9c.1.8-.1 1.7-.7 2.3a4 4 0 01-3 .9c-2.1 0-3.1-.7-3.1-2.3 0-1.6 1-2.4 3-2.4h3.8v1.5zm9.7-7.1c1.2 0 2.4.5 3.1 1.5l1.3-1.3a5.4 5.4 0 00-4.4-2c-3.4 0-5.9 2.3-5.9 6.9 0 4.6 2.6 6.9 5.9 6.9 1.7.1 3.3-.7 4.4-2L74 35.4c-.7 1-1.9 1.5-3.1 1.5-1.2.1-2.4-.5-3.1-1.5-.7-1.1-1-2.3-.9-3.6-.1-1.3.2-2.5.9-3.6.7-1 1.9-1.6 3.1-1.5zm16.8-1.6h-2.4L79.2 31V19.1h-2v19.4h2v-4.9l2.4-2.4 4.5 7.3h2.4l-5.6-8.6 4.8-4.8zm9.2-.2c-1.6 0-3.2.5-4.3 1.7-1.3 1.3-1.6 3-1.6 5.4 0 2.5.3 4.1 1.6 5.4a6.1 6.1 0 004.3 1.7c1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4-1.6-5.4a5.4 5.4 0 00-4.3-1.7zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 2 .8 3.4 0 1.5-.1 2.7-.8 3.4zM112.2 25l-2.8 8.6-2.8-8.6h-3.7l5.2 14h2.7l5.1-14h-3.7zm9.6 0c-3.6 0-6.1 2.5-6.1 7 0 5.7 3.2 7.2 6.5 7.2 2 .1 4-.7 5.3-2.2l-2.1-2c-.8.8-2 1.3-3.2 1.2a3 3 0 01-3.1-2.7v-.4h8.7v-1.6c.1-3.8-2.1-6.6-6-6.6zm-2.7 5.7l.3-1.5c.4-.9 1.3-1.4 2.3-1.4 1 0 1.9.5 2.3 1.4l.3 1.5h-5.2zm13.3-4.3v-1.3H129v14h3.5v-8.4c0-1.3.8-2.4 2.1-2.6h.2c.7 0 1.4.3 1.8.8l2.6-2.6A4.1 4.1 0 00136 25c-1.3 0-2.6.4-3.5 1.4zm7.6-2.8V39h3.5V28h2.6v-2.7h-2.6v-1.5c0-.6.3-1.2 1-1.3h1.5v-3h-2a3.9 3.9 0 00-4 3.8v.3zm20.3 1.3c-1.6 0-3.2.5-4.3 1.7-1.3 1.3-1.6 3-1.6 5.4 0 2.5.3 4.1 1.6 5.4a6.1 6.1 0 004.3 1.7c1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4-1.6-5.4a5.4 5.4 0 00-4.3-1.7zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 2 .8 3.4 0 1.5-.1 2.7-.8 3.4zM182.7 25l-2.3 8.6-2.9-8.6H175l-2.8 8.7-2.3-8.6h-3.7l4.3 14h2.9l2.9-8.8 2.9 8.8h3l4.3-14h-3.8zm-31.2 9.8V19.6H148V35a3.8 3.8 0 003.6 4h2.5v-3h-1.3c-.6.1-1.1-.2-1.3-.8v-.4zm-98.8-9.4H49V21h-2v13.9c0 2 1.1 3.6 3.4 3.6h1.4v-1.7h-1c-1.3 0-1.8-.7-1.8-2v-7.7h1.9l1.8-1.7z" fill="#222426"/>
            </svg>
            
          </Link>
          <Link to='/' className="nav-item nav-btn">About</Link>
          <Link to='/' className="nav-item nav-btn">Products</Link>
          <Link to='/' className="nav-item nav-btn">For Teams</Link>
          <form>
            <input type="text" placeholder="Search..."/>
            <svg width="18" className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </form>
          { User===null?
          <Link to='/Auth' className="nav-item nav-links">Log in</Link>
        :<>
        <Avatar backgroundColor='#009dff' px='10px' py='15px' borderRadius='50%' color='white'>
          <Link to={`/Users/${User?.result._id}`} style={{color:"white",textDecoration:"none"}}>
          {User.result.name.charAt(0).toUpperCase()}</Link>
          </Avatar>
          <Link to='/Auth' className="nav-item nav-links">Log in</Link>
        <button className="nav-item nav-links" onClick={handlelogout}>Log out</button>
        </>}

            </div>
        </nav>
    )
}