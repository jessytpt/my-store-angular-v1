import { Component } from '@angular/core';
import { Producto } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Jessenia';
  age = 27;
  img = 'https://randomuser.me/api/portraits/women/30.jpg';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
  person = {
    name: 'Jessenia',
    age: 30,
    avatar: 'https://randomuser.me/api/portraits/women/30.jpg'
  }

  names:string[] = ['Jess','Kathy','Miguel', 'José Luis', 'Ronald']
  newName:string = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  products:Producto[] = [
    {
      name: 'Comedor Industrial',
      price: 700,
      pathImage: './assets/images/1.comedor-industrial.jpg',
      category: 'cocina'
    },
    {
      name: 'Comedor Madera',
      price: 350,
      pathImage: './assets/images/2.comedor-madera.jpg'
    },
    {
      name: 'Comedor Redondo',
      price: 350,
      pathImage: './assets/images/3.comedor-redondo.jpg'
    }
    ,
    {
      name: 'Ollas Tramontina',
      price: 180,
      pathImage: './assets/images/4.ollas-tramontina.jpg'
    }
    ,
    {
      name: 'Ollas Unco',
      price: 350,
      pathImage: './assets/images/5.ollas-unco.jpg'
    }
    ,
    {
      name: 'Cocina Eléctrica',
      price: 350,
      pathImage: './assets/images/6.cocina-electrica.jpg'
    }
    ,
    {
      name: 'Cocina Inducción',
      price: 350,
      pathImage: './assets/images/7.cocina-induccion.jpg'
    }
    ,
    {
      name: 'Refri 16 pies',
      price: 350,
      pathImage: './assets/images/8.refri-16-pies.jpg'
    }
    ,
    {
      name: 'Refri 10 pies',
      price: 350,
      pathImage: './assets/images/9.refri-10-pies.jpg'
    }
    ,
    {
      name: 'Vajilla 1',
      price: 350,
      pathImage: './assets/images/10.vajilla-1.jpg'
    }
    ,
    {
      name: 'Vajilla 2',
      price: 350,
      pathImage: './assets/images/11.vajilla-2.jpg'
    }
    ,
    {
      name: 'Vajilla 3',
      price: 350,
      pathImage: './assets/images/12.vajilla-3.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increanseAge(){
    this.person.age +=1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName (){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }

  onRegister(){
    console.log(this.register);
  }
}
