export default {
  login(payload) {
    const uer = {
      name: payload.name,
      password: payload.password,
    };
    this.user.push(uer);
    const lastUser = this.user[this.user.length - 1];
    const nameOfLastUser = lastUser.name;

    alert(`bạn đã đăng kí thành công tài khoản có tên${nameOfLastUser}`);
  },
  dataName(payloadd) {
    const dataname = payloadd
    console.log(dataname);
  },
};
