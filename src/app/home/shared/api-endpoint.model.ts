export class ApiEndpoint {

  public static ROOMS = '/rooms';
  public static HOTELS = '/hotels';
  public static SEARCH = '/search';
  public static RESERVAS = '/reservas';
  public static ROOMS_SEARCH = ApiEndpoint.ROOMS + ApiEndpoint.SEARCH;
  public static RESERVAS_INFO = ApiEndpoint.RESERVAS + ApiEndpoint.SEARCH;
}
