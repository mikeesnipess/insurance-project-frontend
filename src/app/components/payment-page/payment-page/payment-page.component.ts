import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  constructor(private router: Router) { }
  handler:any = null;
  ngOnInit() {
 
    this.loadStripe();
  }
 
  pay(amount: any) {    
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51P9CsABLXUSTkjyeoFthKJ1iLeGELabqPmp0JDIWJ87erLtoKwu0c2741Yghmo1aJ0wNg2kuevpH6YnvPnALNjLg007S9a1Azi',
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token.id)
        // Use Angular Router to navigate
        this.router.navigateByUrl('/review-page');
      }
    });
  
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
  }
  
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51P9CsABLXUSTkjyeoFthKJ1iLeGELabqPmp0JDIWJ87erLtoKwu0c2741Yghmo1aJ0wNg2kuevpH6YnvPnALNjLg007S9a1Azi',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token.id)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}
