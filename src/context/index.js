import { createContext } from "react";

export default createContext( {
    pageNumber: 0,
    handlePagenumber: () => {},
    drawerOpen: false,
    setDraweropen: () => {},
    isLoading: false,
    setIsLoading: () => {},
    memberOffset:[],
    setMemberOffset: () => {},
    pagination:{
        count: 0,
        from: 0,
        to: 3,        
    },
    setPagination: () => {},
    results:[],
    setResults: () => {},
    avatars: [],
    setAvatars: () => {},
    members:[],
    setMembers: () => {},

})