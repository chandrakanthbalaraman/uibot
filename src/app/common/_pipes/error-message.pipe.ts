import { Pipe, PipeTransform } from '@angular/core';
import { ERROR_MESSAGES } from '@app/common/_const/message.const';

@Pipe({ name: 'error' })
export class ErrorMessagePipe implements PipeTransform {
  transform(code: string) {
        let errorMsg = '';
        if (code) {
            if(ERROR_MESSAGES.hasOwnProperty(code)){
                return ERROR_MESSAGES[code];
            }
        } 
        return errorMsg;
  }
  
}
