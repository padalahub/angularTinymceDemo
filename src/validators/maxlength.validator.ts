import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const maxLengthValidator = (editorSubject: Subject<any>, characterLimit: number): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return editorSubject.pipe(map((editor) => {
      if(editor.plugins.wordcount.body){
      const characterCount = editor.plugins.wordcount.body.getCharacterCount();
      
      return characterCount <= characterLimit ? null : {
        maxlength: {
          requiredLength: characterLimit,
          actualLength: characterCount
        }
      
      };
    }else {
      return null;
    }
    
  } ));
  };
}

export { maxLengthValidator };
