export const clamp = (x: number, min: number, max: number) => (
    Math.min(Math.max(x, min), max)
)

export const getPrettyDate = (): string => {
    const dayStrs = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    var monthStrs = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const crntDate = new Date()
    let idx = clamp(crntDate.getDay(), 0, dayStrs.length - 1)
    const weekday = dayStrs[idx]

    idx = clamp(crntDate.getMonth(), 0, monthStrs.length - 1)
    const month = monthStrs[idx]

    const year = crntDate.getFullYear()
    const day = crntDate.getDate()

    return `${weekday} • ${month} ${day}, ${year}`
}
