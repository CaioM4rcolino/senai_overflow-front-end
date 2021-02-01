import axios from "axios"
import { FaAndroid, FaYoutube } from "react-icons/fa"
import { ThemeConsumer } from "styled-components"

export const api = axios.create({
    baseURL: "http://localhost:3333/",
})
