export const links = (user) => {
    if(!!user.userCredentials){
            return [
                {label:"Процедури", path:"/"},
                {label:"Запис", path:"/sign"},
                {label:"Мастера", path:"/masters"},
            ]
    }
    return [
        {label:"Головна", path:"/"}
    ]
}