import {parse , differenceInDays} from 'date-fns'

export const getRemainingDays = (eventDay) => {
  const target = eventDay.split('T')[0]
  const eventDateObj = parse(target, "yyyy-MM-dd", new Date());
  const today = new Date();
  const howManyDays = differenceInDays(eventDateObj, today);
  return howManyDays
}

export const getRemainingDaysLabel = (eventDay) => {
  const target = eventDay.split('T')[0]
  const eventDateObj = parse(target, "yyyy-MM-dd", new Date());
  const today = new Date();
  const howManyDays = differenceInDays(eventDateObj, today);
  let dayLabel = `in ${howManyDays} Days`
  if (howManyDays == 1){
    dayLabel = `Next Day`
  }
  if (howManyDays == 0){
    dayLabel = `Today`
  }
  if (howManyDays < 0){
    dayLabel = `Closed`
  }
  return dayLabel
}