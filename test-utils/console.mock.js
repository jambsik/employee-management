export const useConsoleMock = (type) =>
    jest.spyOn(console, type).mockImplementation(() => {});
