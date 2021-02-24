const monthsTable = require('./languages')

/**
 * Get month information from a string or number
 * @param {string, number} args - A month name or number
 * @param {object} [options] - Additional options
 * @param {string} [options.language=en] - The language to use. Defaults to 'en'
 * @returns {object} A date object containing name, abbr, number, and index
 */
const months = (args, options = {}) => {
  if (!options.language) options.language = 'en'
  if (typeof options.language !== 'string') return false
  if (!args) return false
  if (typeof args !== 'number' && typeof args !== 'string') return false
  if (!monthsTable[options.language]) return false

  for (const month of monthsTable[options.language]) {
    if (typeof args === 'number' && parseInt(args) === month.number) return month
    if (typeof args === 'string' && (args.toLowerCase() === month.abbr || args.toLowerCase() === month.name)) return month
  }

  return false
}

module.exports = months
