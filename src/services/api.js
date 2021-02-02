import axios from "axios"
import { FaAndroid, FaYoutube } from "react-icons/fa"

export const api = axios.create({
    baseURL: "http://localhost:3333/",
})
