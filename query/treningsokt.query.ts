export const allTreningsokterQuery = `
  *[_type == "treningsokt"] | order(date desc) {
    _id,
    date,
    time,
    locationType,
    availableSpots,
    weather
  }
`;