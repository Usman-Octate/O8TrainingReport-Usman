export const formatDate = (dateString, format, separator) => {
    const date = new Date(dateString);
    if (isNaN(date)) return ""; 
    
    const day = String(date.getDate());
    const paddedDay = day.padStart(2, '0');
    const month = String(date.getMonth() + 1);
    const paddedMonth = month.padStart(2, '0');
    const year = date.getFullYear();
    const shortYear = year.toString().slice(-2);
    const monthShort = date.toLocaleString('default', { month: 'short' });
    const monthLong = date.toLocaleString('default', { month: 'long' });
    
    const formatMapping = {
      "D": day,
      "DD": paddedDay,
      "M": month,
      "MM": paddedMonth,
      "YYYY": year,
      "YY": shortYear,
      "MMM": monthShort,
      "MMMM": monthLong,
    };
  
    return format.split(/[-/. ]/).map(part => formatMapping[part]).join(separator);
  };
  