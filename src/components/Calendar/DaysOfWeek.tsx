const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function DaysOfWeek() {
    return (
        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            {
                daysOfWeek.map((day, i) => <div key={`${day}-${i}`}>{day}</div>)
            }
        </div>
    )
}
