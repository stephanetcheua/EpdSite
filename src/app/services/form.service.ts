import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Http, Headers} from "@angular/http";

@Injectable()
export class FormService {

  constructor(private http: Http) {
  }

  private send(body: string, api: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    this.http.post(api, body, {headers: headers}).subscribe(
      data => {
        alert("Übermittlung erfolgreich");
      },
      error => {
        console.log(error);
      }
    );
  }

  sendContactForm(form: FormGroup) {
    const message = "Von: " + form.value.name + "\nE-Mail: " + form.value.email + "\nBetreff: "
      + form.value.phone + "\nNachricht: " + form.value.message;
    const html = `<h1>Kontaktanfrage</h1><p>Name: ${form.value.name}</p>
                 <p>E-Mail: ${form.value.email}</p><p>Betreff: ${form.value.subject}</p><hr><p>${form.value.message}</p>`;

    const toSend = {"subject": "kontaktanfrage", "message": message, "html": html};
    const body = JSON.stringify(toSend);
    return this.send(body, '/sendContact');
  }
}
