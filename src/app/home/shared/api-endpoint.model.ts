export class ApiEndpoint {

  public static ROOMS = '/rooms';
  public static HOTELS = '/hotels';
  public static RESERVAS = '/reservas';
  public static SEARCH = '/search';
  public static ROOMS_SEARCH = ApiEndpoint.ROOMS + ApiEndpoint.SEARCH;
  public static RESERVAS_SEARCH = ApiEndpoint.RESERVAS + ApiEndpoint.SEARCH;
}
