export const normalizeSearchText = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f\u064b-\u065f\u0670\u06d6-\u06ed]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .toLocaleLowerCase();
