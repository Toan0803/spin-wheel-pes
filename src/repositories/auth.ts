import axios from "../axios";

export default {
  async login() {
    console.log("zczxc");

    return await axios.get(
      "https://6166eeb713aa1d00170a68ae.mockapi.io/api/v1",
    );
  },
};
