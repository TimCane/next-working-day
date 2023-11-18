export function GetUTCTime(date: Date | null): number | null {
    if (!date) {
        return null;
    }

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    return Date.UTC(year, month, day);

}