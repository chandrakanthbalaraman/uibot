import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
// import * as _ from 'underscore';

export  class CommonService {
    static rootUrl: string = environment.baseUrl;
    
    static httpreq(url: string) {
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        return {
            url: this.rootUrl + url,
            headers: headers
        };
    }
    // static msReqPathMatch(url: string,reqObj:any) {
    //     let headers = new HttpHeaders();
    //     headers = headers.set('content-type','application/json;charset=UTF-8');
    //     let matchUrl = _.template(url);
    //     let compiledUrl =  matchUrl(reqObj);
    //     return {
    //         url: this.msrootUrl + compiledUrl,
    //         headers: headers
    //     };
    // }
    
}