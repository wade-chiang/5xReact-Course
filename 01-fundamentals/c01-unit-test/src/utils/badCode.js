import data from '../data/data.json';

/**
 * api 規格請使用 data.json
 * {
      "id": "fakeId0",
      "startDate": "2021-11-01T00:00:00.000-07:00", // 該筆資料開始日期
      "endDate": "2022-11-29T00:00:00.000-07:00",   // 結束日期
      "targets": ["*", "/", "/spark"], // 該筆資料出現的網址， * 號表示全站都出現
   }
 * 過濾有效的時間
 * 過濾有效的網址
 * 過濾完取有效的第一筆資料
*/

export const getResultData = () => {
  const result = data.filter(({ startDate, endDate, targets }) => {
    if (!targets.includes('*')) {
      return false;
    }

    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const dateNow = Date.now();
    //
    return (
      start < dateNow &&
      end > dateNow &&
      targets.includes(window.location.pathname)
    );
  });
  return result[0];
};
