export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'good' | 'average' | 'poor'

export interface DiaryEntry {
	id: number
	date: string
	weather: Weather
	visibility: Visibility
	comment: string
}

// export type NonSensitiveInfoDiaryEntry = pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
