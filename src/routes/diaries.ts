import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
	res.send(diaryServices.getEntryWitoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
	const id = Number(req.params.id)

	const diary = diaryServices.findDiaryEntry(id)

	if (diary) {
		res.send(diary)
	} else {
		res.sendStatus(404)
	}
})

router.post('/', (req, res) => {
	const { date, weather, visibility, comment } = req.body

	const newDiaryEntry = diaryServices.addDiaryEntry({
		date,
		weather,
		visibility,
		comment,
	})

	res.json(newDiaryEntry)
})

export default router
