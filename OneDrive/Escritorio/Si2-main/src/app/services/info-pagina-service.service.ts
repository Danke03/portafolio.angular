import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaServiceService {

  publicacion: any[]=[];

  constructor(private http: HttpClient) { 
    this.cargarPublicacion();
  }


  private cargarPublicacion(){
    this.http.get('https://angular-plantilla-5307f-default-rtdb.firebaseio.com/publicaciones.json')
    .subscribe((resp: any)=>{
      this.publicacion = resp;
      console.log(resp);
    });
  }
}
