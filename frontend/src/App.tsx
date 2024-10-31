import { useEffect, useState } from 'react'
import { Calendar } from './components/ui/calendar'

function App() {
	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch('/api/skills')
				const data = await res.json()
				console.log({ data })
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	const [date, setDate] = useState<Date | undefined>(new Date())
	return (
		<div>
			<Calendar
				mode='single'
				selected={date}
				onSelect={setDate}
				className='rounded-md border'
			/>
		</div>
	)
}

export default App
