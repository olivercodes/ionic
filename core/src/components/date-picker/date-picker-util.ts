import { parse, getDaysInMonth } from 'date-fns';

// Expects day to be of format mon-1, tues-1, etc.
export function getWeekOnePadding(day: string) {

  // Make sure the fn is handed a proper first day of month
  if (day.split('-')[0] !== '1') {
    throw new Error(`Not a valid first day of month. Format is: <day>-1, you provided: ${day}`);
  }

  if (day.indexOf('mon') !== -1) {
    return 1;
  } else if (day.indexOf('tue') !== -1) {
    return 2;
  } else if (day.indexOf('wed') !== -1) {
    return 3;
  } else if (day.indexOf('thu') !== -1) {
    return 4;
  } else if (day.indexOf('fri') !== -1) {
    return 5;
  } else if (day.indexOf('sat') !== -1) {
    return 6;
  } else {
    return 0
  }
}

export function getInitialMonthView(year: number, month: number) { 
  return Array(
    getDaysInMonth(parse(new Date(year, month, 1))))
      .fill("")
      .map((_x, index) => {
        const day = new Date(year, month, index + 1);
        return `${day.getDate() + "-" + getDayOfWeek(day.getDay())}`; 
      });
}

export function getDayOfWeek(dayVal: number) {
  const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  return daysOfWeek[dayVal];
}

export function createPaddedMonth(monthView: Array<string>, buffers: number) {
  return [...Array(buffers).fill(''), ...monthView]
}

export function createFinalMonthView(year: number, month: number) {
  var thisMonth = getInitialMonthView(year, month); // ?
  var buffers = getWeekOnePadding(thisMonth[0]); // ?
  const monthView = createPaddedMonth(thisMonth, buffers);
  return monthView.map((day) => day.split('-')[0]);
}


// tests
getInitialMonthView(2019, 0); //?
getInitialMonthView(2012, 2); // ?
createFinalMonthView(2019, 2); // ?
// getWeekOnePadding('mon-1'); // ?
// getWeekOnePadding('tues-1'); // ?
// getWeekOnePadding('wed-1'); // ?
// getWeekOnePadding('thurs-1'); // ?
// getWeekOnePadding('fri-1'); // ?
// getWeekOnePadding('sat-1'); // ?
// getWeekOnePadding('sun-1'); // ?
getInitialMonthView(2012, 2); // ?