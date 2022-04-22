// função assincrona sem debugging try/catch
async function resolvePromise(){
const myPromisse = new Promise ((resolve,reject)=>{
window.setTimeout( ()=> {
   resolve(console.log("resolvida")) 
},2000)
})
let result;

const resolved = await myPromisse 
.then((result) => result + "passando pelo then")
.then((result) => result + 'E agora acabou')
.catch((err) => console.log(err.message))

return resolved
}
//função assincrona com try/catch

async function resolvePromise(){
  const myPromisse = new Promise ((resolve,reject)=>{
  window.setTimeout( ()=> {
     resolve(console.log("resolvida")) 
  },2000)
  })
  let result

  try {     
  result = await myPromisse 
  .then((result) => result + "passando pelo then")
  .then((result) => result + 'E agora acabou')  
  } catch (e) {
    result = e.message    
  }
  return result
}