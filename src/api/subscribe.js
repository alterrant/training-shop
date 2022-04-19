import instance from "./api";

export default {
  getSubscribe(email) {
    return instance.post("email", {
      mail: email,
    });
  },
};
