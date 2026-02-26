const express = require('express')
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.post('/login', (req, res) => {
    const { username, password } = req.body

    if (username === 'admin' && password === '1234') {
        console.log("Login correcto")
        return res.json({ success: true })
    }

    console.log("Login incorrecto")
    res.status(401).json({ success: false })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
