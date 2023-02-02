import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
	res.send(diaryServices.getEntries())
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
	try {
		const newDiaryEntry = toNewDiaryEntry(req.body)

		const addedDiaryEntry = diaryServices.addDiaryEntry(newDiaryEntry)

		res.json(addedDiaryEntry)
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.message)
		}
	}
})

router.delete('/:id', (req, res) => {
	const id = Number(req.params.id)

	const diary = diaryServices.deleteDiary(id)

	if (diary) {
		res.json(diary)
	} else {
		res.sendStatus(404)
	}
})

router.put('/:id', (req, res) => {
	const id = Number(req.params.id)

	const diary = diaryServices.findDiaryEntry(id)

	if (diary) {
		const newDiaryEntry = toNewDiaryEntry(req.body)

		const updatedDiaryEntry = diaryServices.updateDiaryEntry(id, newDiaryEntry)

		res.json(updatedDiaryEntry)
	} else {
		res.sendStatus(404)
	}
})

export default router
