export const getCurrentDate = () => {
  const timeStamp = Date.now()
  const dateObject = new Date(timeStamp)
  const localDate = dateObject.toLocaleDateString('en-US', {
    month: 'long',
    weekday: 'long',
    day: 'numeric',
  })

  return localDate
}
