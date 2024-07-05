
const adduser=(value)=>{
        const dispatch=useDispatch()
        dispatch(adduser(value))
}

const user=useSelector((state)=> {return state.users})