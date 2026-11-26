const inputDates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function parseDate(dateStr) {
	if (typeof dateStr !== 'string') return null;

	let day, month, year;

	if (dateStr.includes('-')) {
		// Формат DD-MM-YYYY
		[day, month, year] = dateStr.split('-');
	} else if (dateStr.includes('/')) {
		// Формат MM/DD/YYYY
		[month, day, year] = dateStr.split('/');
	} else {
		return null;
	}

	// Проверяем наличие всех частей и их длину (день и месяц — 2 цифры, год — 4 цифры)
	if (!day || !month || !year) return null;
	if (!/^\d{2}$/.test(day) || !/^\d{2}$/.test(month) || !/^\d{4}$/.test(year)) {
		return null;
	}

	return {
		day: Number(day),
		month: Number(month),
		year: Number(year),
		rawDay: day,
		rawMonth: month,
		rawYear: year,
	};
}

function isValidDate(parsed) {
	if (!parsed) return false;

	const { day, month, year } = parsed;

	// Базовая проверка диапазонов
	if (month < 1 || month > 12) return false;
	if (day < 1 || day > 31) return false;

	// Проверка високосного года (год уже 4-значный, 2000 прибавлять не нужно)
	const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	return day <= daysInMonth[month - 1];
}

function formatDates(datesArray) {
	return datesArray
		.map(parseDate)
		.filter(isValidDate)
		.map(({ rawDay, rawMonth, rawYear }) => `${rawDay}-${rawMonth}-${rawYear}`);
}

console.log(formatDates(inputDates));
// Вывод: [ '10-02-2022', '12-11-2023' ]

