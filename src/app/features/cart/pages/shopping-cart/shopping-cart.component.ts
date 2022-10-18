import { BeerService } from './../../../../services/beer.service';
import { Observable, switchMap } from 'rxjs';
import { CartService } from './../../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { IBeer } from 'src/app/interfaces/beer.interface';
import { ISavedBeer } from 'src/app/interfaces/savedBeer.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems$: Observable<IBeer[]>;
  constructor(
    private cartService: CartService,
    private beerService: BeerService
  ) {
    this.cartItems$ = this.cartService.shoppingCart$.pipe(
      switchMap((savedBeers: ISavedBeer[]) => {
        let ids: number[] = [];
        savedBeers.forEach((beer: ISavedBeer) => {
          ids.push(beer.id);
        });
        return this.beerService.getMultipleBeerFromIds$(ids);
      })
    );
  }

  ngOnInit(): void {}

  onDecrementQuantity(id: number) {
    console.log('decre');

    this.cartService.decreaseQuantity(id);
  }
  onIncrementQuantity(id: number) {
    this.cartService.increaseQuantity(id);
  }
}