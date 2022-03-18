import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileDemo';
  products:any;
  constructor(private ps:ProductsService,private dialog:MatDialog) { }

  ngOnInit(): void {
     this.ps.getProducts().subscribe({
      next: (data:any)=> this.products =data,
      error: (error:any)=> this.products=[]
  })
  }
  
  loadDialog(){
    
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '900px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(()=>this.ngOnInit());

}
   loadUpdateDialog(x:any){
    const dialogRef = this.dialog.open(ProductFormComponent,{
      data: {
            id:x.id,
            type:x.type,
            name:x.name,
            description: x.description,
            qty:x.qty,
            image:x.image,
            price:x.price
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
   }

 remove(id:any){
   console.log("event fired",id)
   console.log(id)
    this.ps.removeProduct(id).subscribe({
      next:()=>this.ngOnInit(),
      error: ()=>alert("unable to remove")
    }
    )
 }
}
