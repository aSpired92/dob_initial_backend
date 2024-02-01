import cors from 'cors'
import express from 'express'
import compression from "compression"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import http from "http";

const app = express()

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
    console.log("Server running on http://127.0.0.1:8080")
})