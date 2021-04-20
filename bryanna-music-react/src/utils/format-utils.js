export function getCount(val) {
  if (val < 0) return;
  if (val < 10000) {
    return val;
  } else if (Math.floor(val / 10000) < 10000) {
    return Math.floor(val / 1000) / 10 + '万';
  } else {
    return Math.floor(val / 10000000) / 10 + '亿';
  }
}
export function getSizeImg(url, size) {
  return `${url}?${size}x${size}`;
}