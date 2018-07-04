import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';




import { CommonService } from '@app/common/_services/common.service';
import { API_POINTS } from '@app/common/_const/api.const';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class GenerateService {
    constructor(
        private http: HttpClient,
        
    ){ }
    postGenerate(dataObj:any){
        let respData = CommonService.httpreq(API_POINTS.generate.app);
        return this.http.post(respData.url, dataObj, {headers: respData.headers}).map(res => res);
    }

    postGenerateLayout(dataObj:any){
        let respData = CommonService.httpreq(API_POINTS.generate.layout);
        return this.http.post(respData.url, dataObj, {headers: respData.headers}).map(res => res);
    }
    

}