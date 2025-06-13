export const allTreningsokterQuery = `
  *[_type == "treningsokt" && date >= now()] | order(date asc) {
    _id,
    date,
    time,
    locationType,
    availableSpots,
    weather
  }
`;