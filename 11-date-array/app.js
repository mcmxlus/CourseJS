const inputDates = ['10.02.22', 'ТЭС', '11-12-23', '0.13.22', '41.12', '29/02/24', '29/02/23', '31-04-22'];

function parseDate(dateStr) {
	if (typeof dateStr !== 'string') return null;

	let day, month, year, separator;

	if (dateStr.includes('-')) {
		separator = '-';
		// Формат MM-DD-YY
		[month, day, year] = dateStr.split(separator);
	} else if (dateStr.includes('/')) {
		separator = '/';
		// Формат DD/MM/YY
		[day, month, year] = dateStr.split(separator);
	} else if (dateStr.includes('.')) {
		separator = '.';
		// Формат DD.MM.YY
		[day, month, year] = dateStr.split(separator);
	} else {
		return null;
	}

	// Проверяем, что строка разделилась ровно на 3 части и каждая состоит из 2 цифр
	if (!day || !month || !year) return null;
	if (!/^\d{2}$/.test(day) || !/^\d{2}$/.test(month) || !/^\d{2}$/.test(year)) {
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

	// Базовая проверка (sanity-check)
	if (month < 1 || month > 12) return false;
	if (day < 1 || day > 31) return false;

	// Усложнение: проверка количества дней в конкретном месяце и високосного года
	const fullYear = 2000 + year;
	const isLeapYear = (fullYear % 4 === 0 && fullYear % 100 !== 0) || fullYear % 400 === 0;

	const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	return day <= daysInMonth[month - 1];
}

function formatDates(datesArray) {
	return datesArray
		.map(parseDate) // 1. Разбираем строки в объекты с учетом разделителя
		.filter(isValidDate) // 2. Отсеиваем null и логически некорректные даты
		.map(({ rawDay, rawMonth, rawYear }) => `${rawDay}-${rawMonth}-${rawYear}`); // 3. Приводим к DD.MM.YY
}

console.log(formatDates(inputDates));
