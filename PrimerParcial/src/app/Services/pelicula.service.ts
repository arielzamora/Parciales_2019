import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}from '@angular/fire/firestore';
import {Observable}from 'rxjs/internal/Observable';
import {map}from 'rxjs/operators';
import { firestore } from 'firebase';
import {Peliculas}from './../Model/Peliculas';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private peliculasColeccion:AngularFirestoreCollection<Peliculas>;
  private peliculasDoc:AngularFirestoreDocument<Peliculas>;
  private peliculass
  constructor(private afs:AngularFirestore) { 
    this.peliculasColeccion=afs.collection<Peliculas>('Peliculas');
    this.peliculass=this.peliculasColeccion.valueChanges();
  }



  public Listar(): Observable<Peliculas[]> {
    this.peliculasColeccion=this.afs.collection<Peliculas>('Peliculas');
   return this.peliculass=this.peliculasColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Peliculas;
        data.id = action.payload.doc.id; //me pisa el id del user con el del documento
        return data;
      });
    }));
  }

  //tengo que dar de alta el usuario y el rol 
  public Registrar(Peliculas:Peliculas): Promise<Object> {
    this.peliculasColeccion=this.afs.collection<Peliculas>('Peliculas');
    return new Promise((resolve, reject) => {

    this.peliculasColeccion.add(Peliculas).then(result=>{       
      resolve(true);
      }).catch(err => {
        reject(false);
      });
          
    })
    
  }

  //despues de insertado ,obtengo el Peliculas para pguardar su id de documento al id de Peliculas
  obtenerPeliculas(desc: string): Observable<Peliculas[]>{
 
    this.peliculasColeccion=this.afs.collection<Peliculas>('Peliculas',x=>x.where("nombre","==",desc));
     return this.peliculass=this.peliculasColeccion.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as Peliculas;
          data.id = action.payload.doc.id; 
         return data;
       });
     }));

   }
   
  public Modificar(Peliculas:Peliculas): Promise<Object> {
 
    //MODIFICO Peliculas       
    let idPeliculas=Peliculas.id;

    return new Promise((resolve, reject) => {
    this.peliculasDoc=this.afs.doc<Peliculas>('Peliculas/'+idPeliculas);
    
    this.peliculasDoc.update(Peliculas).then(result => {
      resolve(true);
      }).catch(err => {
        reject(false);
      });
    
  })

  }

  public Baja(Peliculas: Peliculas): Promise<Object>{

    let idPeliculas=Peliculas.id;

    return new Promise((resolve, reject) => {

    this.peliculasDoc=this.afs.doc<Peliculas>('Peliculas/'+idPeliculas);
      
    this.peliculasDoc.update(Peliculas).then(resolved=>{
      resolve(true);
    }).catch(err=>{
      reject(false);
    });

    })

    }

}