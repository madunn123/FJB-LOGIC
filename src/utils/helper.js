export const awaiter = (duration = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, duration);
});

export const saveToLocalStorage = (key = '', payload = {}) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getToLocalStorage = (key = '') => {
  const item = localStorage.getItem(key);

  if (!item) return null;

  return JSON.parse(item);
};

export const usdCurrency = (amount) => amount?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export const createConnection = () => ({
  connect() {
    console.log('connecting');
  },
  disconnect() {
    console.log('disconected');
  },
});
