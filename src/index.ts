import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

app.use('/api/diaries', diaryRouter)

const port = 3000

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
