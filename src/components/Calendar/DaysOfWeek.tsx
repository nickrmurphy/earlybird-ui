const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function DaysOfWeek() {
    return (
        <div className="eb-mt-6 eb-grid eb-grid-cols-7 eb-text-xs eb-leading-6 eb-text-gray-500">
            {
                daysOfWeek.map((day, i) => <div key={`${day}-${i}`}>{day}</div>)
            }
        </div>
    )
}
