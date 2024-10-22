export const formatDate = (date: number) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    return year + '年' + month + '月' + day + '日' + ' ' + hour + '点' + minutes + '分';
}