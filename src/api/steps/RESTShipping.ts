import { Given, Then, When } from "@cucumber/cucumber";
import RequestHeader from "../../support/playwright/API/RequestHeader";
import RESTRequest from "../../support/playwright/API/RESTRequest";
import RESTResponse from "../../support/playwright/API/RESTResponse";
import Assert from "../../support/playwright/asserts/Assert";
import StringUtil from "../../support/utils/StringUtil";
import Constants from "../constants/Constants";
import { expect } from '@playwright/test';

function getHeader() {
    return new RequestHeader().set(Constants.CONTENT_TYPE, Constants.APPLICATION_JSON)
        .set(Constants.ACCEPT, Constants.APPLICATION_JSON)
        .set(Constants.AUTHORIZATION, `${Constants.BASIC} ${Buffer.from(`${Constants.USER}:${Constants.USER}`)
            .toString(Constants.BASE64)}`).get();
}

Given('the user sends a post request to Coordinadora Information System using {string},{string},{string},{string}, {string}, {string}, {string}, {string},{string}',
        async function (direccion: string, numero: string, fechaRecogida: string, nombreEntrega: string, apellidosEntrega: string,
            celularEntrega: string,emailUsuario: string, descripcionTipoVia: string, aplicativo: string) {
            const endPoint = `${process.env.REST_API_BASE_URL2}${Constants.PICKUP_EP}`;
            const requestData = {
                "tipoEnvio": "1",
                "tipoProducto": "4",
                "indicativo": "57",
                "tipoDocumento": "13",
                "email": "ana@gmail.com",
                "personaEntrega": "1",
                "indicativoEntrega": "57",
                "medidasAproximadas": [{"id": 2,"tipoPaq": "Par de zapatos","nombrePaq": "Par de za...","cantidad": 1}],
                "ciudad": "Envigado (Ant)",
                "via": "via",
                "numero": numero,
                "detalle": "PARQUE SAN JOSE BOD 14",
                "tipoVia": 16,
                "nombres": "prueba",
                "apellidos": "prueba1",
                "documento": "1036149000",
                "celular": "3005777777",
                "ciudadDetalle": {
                "nombre_terminal_operativa": "Medellin",
                "tipo_servicio": "A",
                "dane_ciudad": "05266",
                "dane_actual": "05266000",
                "ciudad_tarifa": "05266000",
                "sms": true,
                "cubre_mqp": true,
                "codigo_postal": "055428",
                "terminal_operativa": 2,
                "cubre_me": true,
                "area_telefono": 4,
                "observaciones2": "FCE - RD - FD - RCE",
                "codigo": "05266000",
                "tipo_poblacion": "D",
                "activo": true,
                "codigo_terminal": 2,
                "codigo_interno": 204,
                "mensajeria": true,
                "cubre_mm": false,
                "departamento": "05",
                "cubre_cm": false,
                "nombre": "Envigado (Ant)",
                "abreviado": "ENVIGADO",
                "nombre_terminal": "Medellin",
                "observaciones": ""
                },
                "direccion": direccion,
                "fechaRecogida": fechaRecogida,
                "nombreEntrega": nombreEntrega,
                "apellidosEntrega":apellidosEntrega ,
                "celularEntrega": celularEntrega,
                "emailUsuario": emailUsuario,
                "descripcionTipoVia": descripcionTipoVia,
                "aplicativo": aplicativo
            }
            const request: RESTRequest = this.rest;
            const requestBody = await request.createRequestBody(Constants.SHIPPING_JSON, requestData);
            this.response = await request.post(this.attach, endPoint, getHeader(), requestBody, Constants.SINGLE);
            this.bookID = await this.response.getTagContentByJsonPath(Constants.ID_JSON_PATH, Constants.SINGLE);
        });


    Then('user should get a response with status code {int}', async function (status: number) {
        const response: RESTResponse = this.response;
        await Assert.assertEquals(await response.getStatusCode(), status, Constants.STATUS_CODE);
    });
    

    Then('user should be able to see isError equals false in the response',
            async function () {
                const response: RESTResponse = this.response;
                await Assert.assertFalse( JSON.parse(await response.getTagContentByJsonPath(Constants.ISERROR_JSON_PATH, 'getting value of isError')),'getting value of isError');
                await Assert.assertEquals(await response.getTagContentByJsonPath(Constants.MESSAGE_JSON_PATH, 'getting value of message'), Constants.MESSAGE_RECEIVE,'getting equals' );
            });

    Then('user should be able to see isError equals true in the response',
                async function () {
                    const response: RESTResponse = this.response;
                    await Assert.assertTrue( JSON.parse(await response.getTagContentByJsonPath(Constants.ISERROR_JSON_PATH, 'getting value of isError')),'getting value of isError');
                    await Assert.assertEquals(await response.getTagContentByJsonPath(Constants.MESSAGE_DIR_JSON_PATH, 'getting value of message'), Constants.MESSAGE_DIR_RECEIVE,'getting equals' );
                });  
                
    Then('user should be able to see isError equals true in the response and message duplicate',
                async function () {
                    const response: RESTResponse = this.response;
                    await Assert.assertTrue( JSON.parse(await response.getTagContentByJsonPath(Constants.ISERROR_JSON_PATH, 'getting value of isError')),'getting value of isError');
                    await Assert.assertEquals(await response.getTagContentByJsonPath(Constants.MESSAGE_DUP_JSON_PATH, 'getting value of message'), Constants.MESSAGE_DUP_RECEIVE,'getting equals' );
                });

    
    Then('user should be able to see isError equals true in the response and message before 3pm',
                async function () {
                    const response: RESTResponse = this.response;
                    await Assert.assertTrue( JSON.parse(await response.getTagContentByJsonPath(Constants.ISERROR_JSON_PATH, 'getting value of isError')),'getting value of isError');
                    await Assert.assertEquals(await response.getTagContentByJsonPath(Constants.MESSAGE_DUP_JSON_PATH, 'getting value of message'), Constants.MESSAGE_BEF3_RECEIVE,'getting equals' );
                });

    Then('user should be able to see isError equals true in the response characteres required',
                async function () {
                    const response: RESTResponse = this.response;
                    await Assert.assertTrue( JSON.parse(await response.getTagContentByJsonPath(Constants.ISERROR_JSON_PATH, 'getting value of isError')),'getting value of isError');
                    await Assert.assertEquals(await response.getTagContentByJsonPath(Constants.MESSAGE_DUP_JSON_PATH, 'getting value of message'), Constants.MESSAGE_DIR_CHARAC_RECEIVE,'getting equals' );
                });