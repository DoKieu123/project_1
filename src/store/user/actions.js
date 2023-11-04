export default {
   login(payload){
     const uers = {
      number: payload.phone,
      password: payload.password
     };
     this.uers.push(uers)
   }
}