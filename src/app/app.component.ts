import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AsyncSubject, Subject } from 'rxjs';
import { maxLengthValidator} from '../validators/maxlength.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private editorSubject: Subject<any> = new AsyncSubject();
  title = 'angularTinymceDemo';
  public tinyMceForm: FormGroup;
  config ={
    height: 400, 
    branding: false,
    statusbar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
};
 
  constructor(){ 
  
  this.tinyMceForm= new FormGroup({
    comments: new FormControl("",  Validators.required,maxLengthValidator(this.editorSubject, 10))
  });
 }
  handleEditorInit(e:any) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

}
