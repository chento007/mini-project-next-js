export function API_PRODUCT(limit, start) {
    return `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${start}&sort=id:desc`;
}
export function API_CATEGORY(limit) {
    return `https://api.escuelajs.co/api/v1/categories?limit=${limit}`;
}
export function API_PRODUCT_BY_CATEGORY(id, limit, start) {
    return `https://api.escuelajs.co/api/v1/categories/${id}/products?limit=${limit}&offset=${start}`;
}
export function API_PRODUCT_DETAIL(id) {
    return `https://api.escuelajs.co/api/v1/products/${id}`;
}
export function API_USER(limit) {
    return `https://api.escuelajs.co/api/v1/users?limit=${limit}`;
}
export function API_GET_USER_BY_ID(id) {
    return `https://api.escuelajs.co/api/v1/users/${id}`;
}
export function API_GET_CATEGORY_BY_ID(id) {
    return `https://api.escuelajs.co/api/v1/categories/${id}`;
}
export const URL_IMAG = "https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-gallery-vector-icon-png-image_1028015.jpg";
export function API_POST_PRODUCT() {
    return "https://api.escuelajs.co/api/v1/products";
}
export const API_GET_ALL_CATEGORY="https://api.escuelajs.co/api/v1/categories";