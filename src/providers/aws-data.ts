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
    }

    loadProducts() {    
               
        const opHelper = new OperationHelper({
            awsId: 'AKIAIWCDBJ4ZLYJUXUOA',
            awsSecret: '',
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
