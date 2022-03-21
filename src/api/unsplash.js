import axios from "axios";

export default axios.create({
    baseURL: "http://api.unsplash.com",
    headers: {
        Authorization: "Client-ID sArPcmHMFWjzMv_t17_86c6spn7y9tOWuGRIsAMsRDA"
    }
})