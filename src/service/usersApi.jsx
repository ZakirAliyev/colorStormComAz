import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Cookies from "js-cookie";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.colorstorm.com.az/api/',
        prepareHeaders: (headers) => {
            const token = Cookies.get('colorStormToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: `/Product/get-all-products`,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/Product/delete-product/${id}`,
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }),
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `/Product/update-product`,
                body: data,
                method: 'PUT'
            }),
        }),
        getAllCategoriesTree: builder.query({
            query: () => ({
                url: `/Categories/getAllCategoriesTree`,
            }),
        }),
        postAdminLogin: builder.mutation({
            query: (data) => ({
                url: `/UserAccount/admin-login`,
                body: data,
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
            }),
        }),
        postCreateProduct: builder.mutation({
            query: (data) => ({
                url: `/Product/create-product`,
                body: data,
                method: 'POST',
            }),
        }),
        getAllService: builder.query({
            query: () => ({
                url: `/Work/get-all-service`,
            }),
        }),
        postCreateService: builder.mutation({
            query: (data) => ({
                url: `/Work/create-service`,
                body: data,
                method: 'POST',
            }),
        }),
        postUpdateService: builder.mutation({
            query: (data) => ({
                url: `/Work/update-service`,
                body: data,
                method: 'POST',
            }),
        }),
        deleteService: builder.mutation({
            query: (id) => ({
                url: `/Work/delete-service/${id}`,
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }),
        }),
        getAllBrands: builder.query({
            query: () => ({
                url: `/Brand/get-all-brands`,
            }),
        }),
        postCreateBrand: builder.mutation({
            query: (data) => ({
                url: `/Brand/create-brand`,
                body: data,
                method: 'POST',
            }),
        }),
        deleteBrand: builder.mutation({
            query: (id) => ({
                url: `/Brand/delete-brand/${id}`,
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }),
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/Categories/delete-category/${id}`,
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }),
        }),
        postNewCategory: builder.mutation({
            query: (data) => ({
                url: `/Categories/create-category`,
                body: data,
                method: 'POST',
            }),
        }),
        putCategory: builder.mutation({
            query: (data) => ({
                url: `/Categories/update-category`,
                body: data,
                method: 'PUT'
            }),
        }),
        getAllBanners: builder.query({
            query: () => ({
                url: `/Banner/get-all-banners`,
            }),
        }),
        postCreateBanner: builder.mutation({
            query: (data) => ({
                url: `/Banner/create-banner`,
                body: data,
                method: 'POST',
            }),
        }),
        deleteBanner: builder.mutation({
            query: (id) => ({
                url: `/Banner/delete-banner/${id}`,
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }),
        }),
    }),
})
export const {
    useGetAllProductsQuery,
    useDeleteProductMutation,
    useUpdateProductMutation,
    useGetAllCategoriesTreeQuery,
    usePostAdminLoginMutation,
    usePostCreateProductMutation,
    useGetAllServiceQuery,
    usePostCreateServiceMutation,
    usePostUpdateServiceMutation,
    useDeleteServiceMutation,
    useGetAllBrandsQuery,
    usePostCreateBrandMutation,
    useDeleteBrandMutation,
    useDeleteCategoryMutation,
    usePostNewCategoryMutation,
    usePutCategoryMutation,
    useGetAllBannersQuery,
    usePostCreateBannerMutation,
    useDeleteBannerMutation,
} = usersApi