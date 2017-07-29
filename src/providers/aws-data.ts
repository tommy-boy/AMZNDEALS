import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import  { OperationHelper } from 'apac';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AwsData {

    public items: any;
    public products: any;   
    //private awsCredentials;

    constructor(public platform: Platform, public http: Http) {

        //http.createServer(function (request, response) {
        //    response.writeHead(200, {
        //        'Content-Type': 'text/plain',
        //        'Access-Control-Allow-Origin': '*',
        //        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        //    });
        //    response.end('Hello World\n');
        //}).listen(4400);

        //let headers = new Headers;
        //headers.append('Content-Type', 'application/xml');
        //headers.append('Access-Control-Allow-Origin', '*');
        //let text = "";
        //this.awsCredentials = {
        //    associateTag: 'ppster-20',
        //    accessKeyId: 'AKIAIWCDBJ4ZLYJUXUOA',
        //    secretAccessKey: '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'
        //};
    }

    //load() {
    //    if (this.items) {
    //        // already loaded data
    //        return Promise.resolve(this.items);
    //    }
    //    // don't have the data yet
    //    return new Promise(resolve => {
    //        //Using Angular HTTP provider to request the data,
    //        // then on the response, it'll map the JSON data to a parsed JS object.
    //        // Next, we process the data and resolve the promise with the new data.          
    //        this.http.get('https://randomuser.me/api/?results=10')
    //            .map(res => res.json())
    //            .subscribe(data => {
    //                this.items = data.results;
    //                resolve(this.items);
    //            });
    //        console.log(this.items);
    //    });
    //}

    loadProducts() {    
               
        const opHelper = new OperationHelper({
            awsId: 'AKIAIWCDBJ4ZLYJUXUOA',
            awsSecret: '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',
            assocId: 'ppster-20',
            maxRequestsPerSecond: 1
            // xml2jsOptions: an extra, optional, parameter for if you want to pass additional options for the xml2js module. (see https://github.com/Leonidas-from-XIV/node-xml2js#options)
        });

        const operation = 'ItemSearch';
        const params = {
           'SearchIndex': 'HomeGarden',
            'Keywords': 'Cookware',
            'ResponseGroup': 'Images,ItemAttributes,Offers'
        };        

        opHelper.execute(operation, params).then((response: any) => {
            console.log(response)
            console.log(response)
        }).catch((err: any) => {
            console.error(err)
        })  

        // or if you have async/await support...
         /* try {
            let response = await
            opHelper.execute(operation, params)
            console.log(response.results)
            console.log(response.responseBody)
        } catch(err) {
            console.error("Something went wrong! ", err)
        }  */             
    }

}
