import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  paises = ['France', 'Germany','New Zealand','Armenia', 'Australia','Bangladesh','Brazil','Bulgaria','Canada','China','Colombia','Costa Rica', 'Croatia','Egypt','Finland','England','India','Indonesia','Japan','Mexico','Portugal','Russia','Spain','United States'];
  addpais: FormControl;
  Genero:string = null;
  Region:string = null;
  Data = null;
  loading:Boolean;

  constructor(
    private _data:DataService
  ) { }

  ngOnInit() {
    this.buscar('Spain',null);
    this.addpais = new FormControl('');
    this.addpais.valueChanges.pipe(debounceTime(200)).subscribe(
      (pais)=>{
        this.Region = pais
        if(this.Region==='Paises') return this.Region=null;
        this.buscar(this.Region,this.Genero);
      }
    );
  }


  genero(genero: string){
    this.Genero = genero;
    console.log(this.Genero);
  }

  buscar(region:string,genero:string){
    this._data.names(region,genero).subscribe(
      (res:any) =>{
        this.Data = res;
        this.loading = false;
      },err=>{
        setTimeout( () => {
          this.loading = true;
        },1500);
        this.loading = false;
      }
    );
  }

  nuevoName(){
    this.buscar(this.Region,this.Genero);
  }


}
