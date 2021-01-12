declare module 'sunrise-sunset-js' {
  export function getSunrise(
    latitude: number,
    longitude: number,
    date?: Date,
    zenith?: number
  ): Date;
  export function getSunset(
    latitude: number,
    longitude: number,
    date?: Date,
    zenith?: number
  ): Date;
}
