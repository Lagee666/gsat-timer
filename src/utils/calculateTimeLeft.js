const officialDates = {
  // 格式： "YYYY-MM-DDTHH:mm:ss" 
  // 2026年學測日期為 1/22~1/24，這裡以第一天第一節 09:20 為例
  2026: "2026-01-17T09:20:00",
  2027: "2027-01-16T09:20:00", // 假設日期
};

export function calculateTimeLeft(bornDate) {

  const now = new Date();
  const gsatDate = getGSATSaturday(bornDate);
  const diff = gsatDate - now;


  // Check if date is a valid date
  if (isNaN(gsatDate.getTime()) || now > gsatDate || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isEnded: true };
  }

  // 计算剩余时间
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, isEnded: false };
}

function getGSATSaturday(inputDate) {
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear();

  // 1. 決定目標年份 (與你原本邏輯相同)
  const targetYear = month >= 9 ? year + 18 : year + 17;

  // 2. 檢查手動設定區有沒有這個年份的確切時間
  if (officialDates[targetYear]) {
    const officialDate = new Date(officialDates[targetYear]);
    // 確保轉換成功且有效
    if (!isNaN(officialDate.getTime())) {
      return officialDate;
    }
  }

  // 3. 備案：如果沒有手動設定，則執行你原本的「一月倒數第二個週六」推算邏輯
  const janLast = new Date(targetYear, 0, 31);
  const lastDayOfJan = janLast.getDay();

  // 你原本的推算公式
  const daysToSubtract = lastDayOfJan === 6 ? 8 : (15 - lastDayOfJan);
  const targetSaturday = new Date(targetYear, 0, 31 - daysToSubtract);

  // 建議將自動推算的預設時間也設定在早上 09:20，比較精確
  targetSaturday.setHours(9, 20, 0, 0);

  return targetSaturday;
}

// 示例
const date1 = new Date('2025-09-01');
const date2 = new Date('2025-08-31');