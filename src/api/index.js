


export const longinAPI_success = (req) => {
  const loginPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({  
        error: null,
        userData:{
          id : req.id,
          pw: req.pw,
        }
      });
    }, 1000);
  })
  return loginPromise
}

export const longinAPI_failure = () => {
  setTimeout(() => {
    return({  
      error: new Error('error'),
      userData:{
        id : '',
        nicknmae: '',
      }
    })
  } , 1000)
}