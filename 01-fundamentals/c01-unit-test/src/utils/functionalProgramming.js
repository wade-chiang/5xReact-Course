/**
 * @param {string} startDate
 * @param {string} endDate
 * @param {number} dateNow
 */
export const isDateBetweenRange = (
  startDate,
  endDate,
  dateNow = Date.now(),
) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  return start < dateNow && end > dateNow;
};

export const isPathNameAvailable = (includeUrls, pathName) => {
  if (includeUrls.includes('*')) {
    return true;
  }
  return includeUrls.includes(pathName);
};

export const pipe = (...fns) => {
  return (x) => {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
};

export const getFilterResult = (data) => {
  const [result] = data
    .filter((item) => isDateBetweenRange(item.startDate, item.endDate))
    .filter((item) =>
      isPathNameAvailable(item.targets, window.location.pathname),
    );
  return result;
};

export const getFilterStickyBarPipe = pipe(
  (items) => {
    return items.filter((item) =>
      isDateBetweenRange(item.startDate, item.endDate),
    );
  },
  (items) => {
    return items.filter((item) =>
      isPathNameAvailable(item.targets, window.location.pathname),
    );
  },
  ([item]) => item,
);
