import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setLeftDistance()
    setTimeout(() => {
      this.changePositions();
    }, 400);
  }

  setLeftDistance(){
    let cards: any = document.querySelectorAll( '#carousel > div' )
    let leftDistanceArr: number[] = []
    cards.forEach((ell: any) => {
      leftDistanceArr.push( ell.offsetLeft )
    });

    for ( let i = 0; i < leftDistanceArr.length; i++ )
      cards[i].setAttribute('style', `left: ${leftDistanceArr[i]}px; position: absolute; transform: translate(0, -50%); top: 50%`)
  }

  changePositions(){
    let cards: any = document.querySelectorAll( '#carousel > div' )
    setInterval( () => {
        cards.forEach( (ell: any) => {
          let currentTranslate = Number(ell.style.transform.replace('translate(', '').replace('px, -50%)', ''))
          
          ell.setAttribute( 'style', `left: ${ell.offsetLeft}px; position: absolute; transform: translate(${currentTranslate-2}px, -50%); top: 50%` )
          if ( this.checkFirstEll( cards[0], currentTranslate ) )
            cards = document.querySelectorAll( '#carousel > div' )
        });
      }, 
    50)

  }

  checkFirstEll( ell: any, currentTranslate: number ){
    if ( ( ell.offsetLeft + ell.clientWidth + 20 - (-currentTranslate) ) < 0 ){
      ell.remove();
      let lastCard: any = document.querySelector( '#carousel > div:last-child' );
      let cardsBlock: any = document.querySelector( '#carousel' );
      let left = lastCard.offsetLeft;
      let width = cardsBlock.clientWidth + ell.clientWidth;
      ell.setAttribute('style', `left: ${ left < width ? width : left }px; position: absolute; transform: translate(0, -50%); top: 50%`)
      
      document.querySelector( '#carousel' )?.appendChild(ell)
      return true;
    }
    return false
  }

}
