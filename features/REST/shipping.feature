@rest @shipping
Feature: Scenarios related to shipping colection REST API in Coordinadora Information System

        

    @regression  @shipping @succesful
    Scenario: User could generate a shipping colection succesful
        Given  the user sends a post request to Coordinadora Information System using "<direccion>","<numero>","<fechaRecogida>","<nombreEntrega>", "<apellidosEntrega>", "<celularEntrega>", "<emailUsuario>", "<descripcionTipoVia>","<aplicativo>"
        Then user should get a response with status code 200
            And user should be able to see isError equals false in the response       
        Examples:
            | direccion | numero | fechaRecogida | nombreEntrega  | apellidosEntrega | celularEntrega    | emailUsuario     | descripcionTipoVia | aplicativo | isError |
            | 10      | 87     | 2024-11-02    | Southern        | Gothic           |  3125306919       | sg@gmail.es      | sin descripcion    | envios     | false   |



    @regression  @shipping @required
    Scenario: User cannot generate a shipping colection succesful without required variables
        Given  the user sends a post request to Coordinadora Information System using "<direccion>","<numero>","<fechaRecogida>","<nombreEntrega>", "<apellidosEntrega>", "<celularEntrega>", "<emailUsuario>", "<descripcionTipoVia>","<aplicativo>"
        Then user should get a response with status code 400
            And user should be able to see isError equals true in the response         
        Examples:
            | direccion | numero | fechaRecogida | nombreEntrega  | apellidosEntrega | celularEntrega    | emailUsuario     | descripcionTipoVia | aplicativo |
            |           | 87     | 2024-11-02    | Southern       | Gothic           |  3125306919       | sg@gmail.es      | sin descripcion    | envios     |
            |    88     | 87     | 2024-11-02    |                | Gothic           |  3125306919       | sg@gmail.es      | sin descripcion    | envios     |
            |    86     | 87     |               | Southern       | Gothic           |  3125306919       | sg@gmail.es      | sin descripcion    | envios     |
            |    87     | 09     | 2024-11-02    | Southern       |                  |  3125306919       | sg@gmail.es      | sin descripcion    | envios     |  

    @regression  @shipping @duplicate
    Scenario: User makes a duplicate request
        Given  the user sends a post request to Coordinadora Information System using "<direccion>","<numero>","<fechaRecogida>","<nombreEntrega>", "<apellidosEntrega>", "<celularEntrega>", "<emailUsuario>", "<descripcionTipoVia>","<aplicativo>"
        Then user should get a response with status code 200
            And user should be able to see isError equals true in the response and message duplicate   
        Examples:
            | direccion | numero   | fechaRecogida | nombreEntrega  | apellidosEntrega | celularEntrega    | emailUsuario     | descripcionTipoVia | aplicativo |
            |   660     |    09    | 2024-11-02    | Southern       |  Gothic          |  3125306919       | sg@gmail.es      | sin descripcion    | envios     |  
            
           
    @regression  @shipping @before3pm
    Scenario: User makes a  request before3pm
        Given  the user sends a post request to Coordinadora Information System using "<direccion>","<numero>","<fechaRecogida>","<nombreEntrega>", "<apellidosEntrega>", "<celularEntrega>", "<emailUsuario>", "<descripcionTipoVia>","<aplicativo>"
        Then user should get a response with status code 200
            And user should be able to see isError equals true in the response and message before 3pm   
        Examples:
            | direccion | numero   | fechaRecogida | nombreEntrega  | apellidosEntrega | celularEntrega    | emailUsuario     | descripcionTipoVia | aplicativo |
            |   660     |    09    | 2024-10-28    | Southern       |  Gothic          |  3125306919       | sg@gmail.es      | sin descripcion    | envios     | 


    @regression  @shipping  @characteres
    Scenario: User cannot generate a shipping colection succesful without required characteres direction
        Given  the user sends a post request to Coordinadora Information System using "<direccion>","<numero>","<fechaRecogida>","<nombreEntrega>", "<apellidosEntrega>", "<celularEntrega>", "<emailUsuario>", "<descripcionTipoVia>","<aplicativo>"
        Then user should get a response with status code 200
            And user should be able to see isError equals true in the response characteres required        
        Examples:
            | direccion | numero     | fechaRecogida | nombreEntrega  | apellidosEntrega | celularEntrega    | emailUsuario     | descripcionTipoVia | aplicativo |
            | 88^&*()$#@| 87         | 2024-11-02    | Southern       | Gothic           |  3125306919       | sg@gmail.es      | sin descripcion    | envios     |
            | 88        | 87         | 2024-11-02^&*() | Southern       | Gothic           |  3125306919       | sg@gmail.es      | sin descripcion    | envios     |


           
