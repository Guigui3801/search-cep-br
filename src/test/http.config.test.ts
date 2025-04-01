import MockAdapter from "axios-mock-adapter";
import HttpConfig from "../http.config";
import { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from "axios";

describe("HttpConfig", () => {
  let mock: MockAdapter;

  const mockedResponseData = {
    data: {},
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };
  const mockResponse: AxiosResponse = {
    data: { success: true },
    status: 200,
    statusText: "OK",
    headers: {},
    config: {
      headers: new AxiosHeaders(),
      url: '/test',
    } as InternalAxiosRequestConfig,
    request: {}
  };

  beforeAll(() => {
    mock = new MockAdapter(HttpConfig["Http"]);
  });

  afterAll(() => {
    mock.restore();
  });

  it("intercept requests", async () => {
    const onFulfilled = (request: any) => {
      request.headers["Authorization"] = "Bearer token";
      return request;
    };

    HttpConfig.setRequestInterceptors(onFulfilled);

    mock.onGet("/test").reply(200, mockedResponseData);

    const response = await HttpConfig["Http"].get("/test");

    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockedResponseData);
    expect(response.config.headers["Authorization"]).toEqual("Bearer token");
  });
  it("intercept responses", async () => {
    const onFulfilled = (response: any) => {
      response.data = { data: "foo" };
      return response;
    };

    HttpConfig.setResponseInterceptors(onFulfilled);

    mock.onGet("/test").reply(200);

    const response = await HttpConfig["Http"].get("/test");

    expect(response.data).toEqual({ data: "foo" });
  });

    it("should be extract data from response", () => {
      const testData = { example: "data" };
      const response = { ...mockResponse, data: testData };
      
      const result = HttpConfig.getData(response);
      
      expect(result).toEqual(testData);
    });

});
