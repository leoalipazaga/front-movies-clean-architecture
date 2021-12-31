export interface GetStorage {
  get: (key: string) => any
}

export interface SetStorage {
  set: (key: string, data: any) => any
}

export interface WebStorage extends GetStorage, SetStorage { }