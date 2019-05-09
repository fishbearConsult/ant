export function getCurrentAuth(){
    return ["user","admin"]
}
export function checkAuth(auth=[]){
    const current=getCurrentAuth();
   return current.some(item=>{
        return auth.includes(item)
    })
}

export function isLogin(){
    const current=getCurrentAuth();
    return current && !current.includes("guest");
}