import { User } from './../Model/User';
import { Zapato } from 'src/app/Model/Zapato';
import { Injectable, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {AngularFireAuth} from '@angular/fire/auth';
import {auth}from 'firebase/app';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {


  private zapatoColeccion:AngularFirestoreCollection<Zapato>;
  private zapatoDoc:AngularFirestoreDocument<Zapato>;
  private zapatos:Observable<Zapato[]>;
  private zapato:Observable<Zapato>;

  constructor() { }

}