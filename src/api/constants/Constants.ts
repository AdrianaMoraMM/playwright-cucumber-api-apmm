export default class Constants{
    // REST Endpoints 
    static readonly PICKUP_EP = "/recogidas/cm-solicitud-recogidas-ms/solicitud-recogida";
  

    // REST JSON path
    static readonly ID_JSON_PATH = "$.Id";
    static readonly ISERROR_JSON_PATH = "$.isError";
    static readonly MESSAGE_JSON_PATH = "$.data.id_recogida.message";
    static readonly MESSAGE_DIR_JSON_PATH = "$.message";
    static readonly MESSAGE_DUP_JSON_PATH = "$.data.message";
    static readonly MESSAGE_DIR_RECEIVE="Los valores de entrada no son correctos.";
    static readonly MESSAGE_DUP_RECEIVE="Error, Ya existe una recogida programada para hoy, id: 26780669";
    static readonly MESSAGE_RECEIVE="Solicitud recogida programada exitosamente";
    static readonly MESSAGE_BEF3_RECEIVE="La solicitud no puede ser recogida el dia de hoy";
    static readonly MESSAGE_DIR_CHARAC_RECEIVE="Invalid XML";
    // Constants
    static readonly USER = "user";
    static readonly CONTENT_TYPE = "content-type";
    static readonly APPLICATION_JSON = "application/json";
    static readonly ACCEPT = "accept";
    static readonly AUTHORIZATION = "authorization";
    static readonly BASIC = "Basic";
    static readonly BASE64 = "base64";
    static readonly STATUS_CODE = "Status Code";    
    static readonly SESSION = "Session";      
    static readonly SINGLE = "false";
    static readonly SHIPPING_JSON = "shipping.json";

}