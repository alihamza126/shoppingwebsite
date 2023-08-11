// import { createContext, useReducer } from "react";
// import HomeCategory from "../SlideSection/HomeCategory";
// import Navbar from "../header/Navbar";

// export const catContext = createContext()
// const initailstate ={mcat:true};

// const cateReducer = (state,action) => {
 
//     switch (action.type) {
//         case 'catmobile':
//             {
//                 return {mcat:!state.mcat}
//             }
//         default:
//             return state
//     }
// }

// export const CatProvider = (props) => {
//     const [state,dispatch] = useReducer(cateReducer,initailstate);
//     return <catContext.Provider value={{state,dispatch}}>
//         {props.children}
//     </catContext.Provider>
// }
