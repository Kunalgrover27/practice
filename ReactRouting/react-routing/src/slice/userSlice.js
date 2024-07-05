    import createSlice from '@redux/toolkit'

    const userSlice=createSlice({
        name:"user",
        initialState:[],
        reducers:{
            adduser(state,action){
                state.push(action.payload);
            },
            removeuser(state,action){
                state.splice(action.payload,1);
            },
            removeall(state,action){
                return [];
            }
        }
    })

    export default userSlice.reducers
    export const{adduser,removwuser,removeall}=userSlice.actions