export interface ApiResponseError {
    code: string;
    message: string;
}

export interface ApiResponse<Data> {
    error?: ApiResponseError;
    items?: Array<Data>;
    item?: Data;
}
