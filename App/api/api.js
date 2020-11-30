import database from '@react-native-firebase/database';

import auth from '@react-native-firebase/auth';

export const setData=(uid,user)=>{
//console.log("uid"+JSON.stringify(singledate))
return(
  database()
    .ref('/user')
      .child(uid).set({
        user:user,

    })
    .then(()=> {data})
)
}
export const updateDate=(uid,user,{...singledate})=>{
//console.log("uid"+JSON.stringify(singledate))
return(
  database()
    .ref('/user')
      .child(uid).update({
      date: singledate,

    })
    .then((data)=> {data})
)
}
export const updatetime=(uid,user,{...time})=>{
//console.log("uid"+JSON.stringify(singledate))
return(
  database()
    .ref('/user')
      .child(uid).update({

      time: time,

    })
    .then((data)=> {data})
)
}


export const getData=(uid)=>{


return(database()
 .ref("/user/"+uid)
 )
}


export const loginApi=(email, password)=>{
return(
     auth().signInWithEmailAndPassword(email, password).then(resp=>resp).catch(e =>
       {
         Alert.alert(
       "user name or password not wrong"            )}));
}
