export const allTreningsokterQuery = `
  *[_type == "treningsokt"] | order(date asc) {
    _id,
    date,
    time,
    locationType,
    availableSpots,
    weather
  }
`;