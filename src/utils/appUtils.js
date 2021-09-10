export const clearAccountInfo = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('adSoyad');
}